// Nodejs libs.
var path = require('path');
var fs = require('fs');
var url = require('url');

// External libs.
var connect = require('connect'),
	httpProxy = require('http-proxy');

// Get values from config, or use defaults.
var port = process.env.PORT || 5000;
var base = './dist';

var proxy = new httpProxy.RoutingProxy({changeOrigin: true});

var middleware = [

	//if /api/ called proxying to API
	function(req, res, next){
		var requestedPath = url.parse(req.url).pathname;
		if(requestedPath.indexOf("/v1/") == 0 || requestedPath.indexOf("/favicon.ico")==0){
			if (req.method === 'DELETE') {
				req.headers['content-length'] = '0';
			}
			proxy.proxyRequest(req, res, {
				host: "api.qstoq.ru",
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
connect.apply(null, middleware).listen(port);