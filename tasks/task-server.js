/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * http://benalman.com/about/license/
 */

'use strict';

module.exports = function(grunt) {

	// Nodejs libs.
	var path = require('path');
	var fs = require('fs');
	var url = require('url');

	// External libs.
	var connect = require('connect'),
		httpProxy = require('http-proxy');

	// ==========================================================================
	// TASKS
	// ==========================================================================

	grunt.registerTask('server', 'Start a static web server.', function() {
		// Get values from config, or use defaults.
		var port = grunt.config('server.port') || 8000;
		var base = path.resolve(grunt.config('server.base') || '.');

		var proxy = new httpProxy.RoutingProxy({changeOrigin: true});

		var middleware = [

			//if /api/ called proxying to API
			function(req, res, next){
				var requestedPath = url.parse(req.url).pathname;
				if(requestedPath.indexOf("/v1/") == 0){
					proxy.proxyRequest(req, res, {
						host: "qstoq.ru",
						port: 80
					});
					return false;
				}else{
					return next();
				}
			},

			// if request points to non existing file, route to index.html
			function(req, res, next){
				var requestedPath = url.parse(req.url).pathname;
				fs.exists(base + requestedPath, function(exists){
					if(exists){
						return next();
					}else{
						fs.readFile(base + "/index.html", function(error, content){
							if(error){
								console.log("Cannot read file: " + base + "/index.html");
							}else{
								res.writeHead(200, { 'Content-Type': 'text/html' });
								res.end(content, "utf-8");
							}
						});
					}
				});
			},
			
			// Serve other files static
			connect.static(base),
			
			// Make empty directories browsable. (overkill?)
			connect.directory(base)
		];

		// If --debug was specified, enable logging.
		if (grunt.option('debug')) {
			connect.logger.format('grunt', ('[D] server :method :url :status ' +
				':res[content-length] - :response-time ms').magenta);
			middleware.unshift(connect.logger('grunt'));
		}

		// Start server.
		grunt.log.writeln('Starting static web server on port ' + port + '.');
		connect.apply(null, middleware).listen(port);
	});
};