'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
	return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
	var fs = require('fs');

	// load all grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	var path = require('path');
	var fs = require('fs');
	var _ = require('underscore');
	var sprite 	= require('node-sprite');
	var im = require('imagemagick');
	var url = require('url');
	var httpProxy = require('http-proxy');

	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadTasks(__dirname + "/tasks");


	// configurable paths
	var yeomanConfig = {
		app: 'app',
		dist: 'dist'
	};


	grunt.initConfig({
		yeoman: yeomanConfig,

		/* Compiling less files */
		less: {
			all: {
				src: 'app/styles/less/qst.less',
				dest: 'app/styles/css/qst.css',
				options: {
					compress: true
				}
			}
		},
		clean: {
			sprite: {
				files: [{
					dot: true,
					src: [
						'<%= yeoman.app %>/images/sprites/*.png',
					]
				}]
			},
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yeoman.dist %>/*',
						'!<%= yeoman.dist %>/.git*'
					]
				}]
			},
		},


		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= yeoman.app %>/scripts/{,*/}*.js',
				'!<%= yeoman.app %>/scripts/vendor/*',
				'test/spec/{,*/}*.js'
			]
		},

		useminPrepare: {
			options: {
				dest: '<%= yeoman.dist %>'
			},
			html: '<%= yeoman.app %>/index.html'
			// html: ['<%= yeoman.app %>/index.html','<%= yeoman.app %>/go/*.html']
		},
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/images',
					src: '{,*/}*.{png,jpg,jpeg}',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/images',
					src: '{,*/}*.svg',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},
		cssmin: {
			dist: {
				files: {
					'<%= yeoman.dist %>/styles/css/qst.css': [
						'.tmp/styles/{,*/}*.css',
						'<%= yeoman.app %>/styles/css/qst.css'
					],
					'<%= yeoman.dist %>/styles/css/qst_static.css': [
						'.tmp/styles/{,*/}*.css',
						'<%= yeoman.app %>/styles/css/qst_static.css'
					]
				}
			}
		},
		htmlmin: {
			dist: {
				options: {
					collapseBooleanAttributes: true,
					removeAttributeQuotes: true,
					removeRedundantAttributes: true,
					removeEmptyAttributes: true,
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>',
					src: '{,*/}*.html',
					dest: '<%= yeoman.dist %>'
				}]
			},

			deploy: {
				options: {
					removeComments: true,
					collapseWhitespace: true
					// removeCommentsFromCDATA: true,
					// https://github.com/yeoman/grunt-usemin/issues/44
					// collapseWhitespace: true,
					// collapseBooleanAttributes: true,
					// removeAttributeQuotes: true,
					// removeRedundantAttributes: true,
					// useShortDoctype: true,
					// removeEmptyAttributes: true,
					// removeOptionalTags: true
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.dist %>',
					src: '{,*/}*.html',
					dest: '<%= yeoman.dist %>'
				}]
			}
		},

		// Put files not handled in other tasks here
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						'*.{ico,txt}',
						'.htaccess',
						'images/{,*/}*.{webp,gif}',
						'images_static/{,*/}*.*',
						'fonts/*',
						'templates/{,*/}*.html',
						'docs/{,*/}*',
					]
				}]
			}
		},
		rev: {
			dist: {
				files: {
					src: [
						'<%= yeoman.dist %>/scripts/{,*/}*.js',
						'<%= yeoman.dist %>/styles/{,*/}*.css',
						'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
						'<%= yeoman.dist %>/styles/fonts/*'
					]
				}
			}
		},
		usemin: {
			options: {
				dirs: ['<%= yeoman.dist %>']
			},
			html: ['<%= yeoman.dist %>/index.html', '<%= yeoman.dist %>/go/*.html'],
			css: ['<%= yeoman.dist %>/styles/{,*/}*.css']
		},


		handlebars:{
			compile:{
				options:{
					wrapped:true,
					namespace:"qst.Templates.ptemplates",
					processName:function (filename) {
						var path = "/templates/",
							name 	= filename.split(path),
							nm 		= name[name.length - 1];
						name = nm.substr(0, nm.length - 5);
						return name;
					}
				},
				files:{
					"app/scripts/ptemplates.js":["app/templates/{,*/}*.html"]
				}
			}
		},

		sprites: {
			sourcePath: "app/images/sprites/",
			webPath: 	"/images/sprites/",
			lessPath: 	"app/styles/less/sprite.less",
		},

		server: {
			base: 		"./app",
			port: 		3007,
			keepalive: 	true
		},


		watch:{},

		staging: 'temp',
		// final build output
		output: 'dist'		
	});
	

	grunt.registerTask('spritegen', [
		'clean:sprite',
		'sprite',
	]);

	grunt.registerTask('build', [
		'handlebars',
		'spritegen',
		'less',
		
		'clean:dist',
		'useminPrepare',
		'imagemin',
		// 'svgmin',
		'htmlmin:dist',



		'cssmin',
		'concat',
		'uglify',
		'copy:dist',
		'rev',
		'usemin',
		'htmlmin:deploy',
	]);
};