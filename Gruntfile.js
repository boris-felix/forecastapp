var _ = require('lodash');
var path = require('path');
var webpackConfig = require('./webpack.config.js');

module.exports = function(grunt, processor) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: grunt.template.today("yyyymmdd-hhMMss"),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= banner %> */\n'
			},
			build: {
				src: 'public/js/<%= pkg.name %>.js',
				dest: 'public/js/<%= pkg.name %>.min.js'
			}
		},
		jscs: {
			src: [
				'src/js/**/*.js',
				'src/js/*js'
			],
			options: {
				config: ".jscsrc"
			}
		},
		jshint: {
			all: [
				'public/js/**/*.js',
				'public/js/*js'
			]
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		cssmin: {
			options: {
				keepSpecialComments: false
			},
			target: {
				files: [{
					expand: true,
					cwd: 'public/css',
					src: ['*.css'],
					dest: 'public/css',
					ext: '.min.css'
				}]
			}
		},
		'string-replace': {
			dist: {
				files: [{
					src: 'public/index.html',
					dest: 'public/index.html'
				}],
				options: {
					replacements: [{
						pattern: /\$BANNER/gi,
						replacement: '<%= banner %>'
					}]
				}
			},
			prod: {
				files: [{
					src: 'public/index.html',
					dest: 'public/index.html'
				}],
				options: {
					replacements: [
						{
							pattern: /\<\!\-\- \/build \-\-\>/gi,
							replacement: ''
						}
					]
				}
			}
		},
		processhtml: {
			test: {
				files: {
					'public/index.html': ['public/debug.html']
				}
			},
			prod: {
				files: {
					'public/index.html': ['public/debug.html']
				}
			},
			dist: {
				files: {
					'public/index.html': ['public/debug.html']
				}
			}
		},
		clean: {
			build: {
				src: ['public/css/*', 'public/js/*', '!public/js/forecastapp.min.js']
			}
		},
		webpack: {
			basic: webpackConfig
		}
	});

	// Tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks("grunt-jscs");
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-webpack');

	// Default task(s).
	grunt.registerTask('build', ['compass', 'cssmin', 'processhtml:dist']);
	grunt.registerTask('release', ['webpack:basic', 'uglify', 'clean:build', 'build']);
	grunt.registerTask('release:prod', ['release', 'processhtml:prod', 'string-replace', 'string-replace:prod']);
};