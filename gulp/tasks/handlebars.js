/**
* Gulp - Pollyfill
* -------------
*/

var	// require gulp configuration file
	config = require('../config'),

  // require gulp and various plugins
  gulp = require('gulp'),
  handlebars = require('gulp-handlebars'),
  wrap = require('gulp-wrap'),
  declare = require('gulp-declare'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify');


module.exports = function() {

    gulp.src(config.paths.src+'/js/templates/*.hbs')
		.pipe(handlebars()).on('error', notify.onError({
			title: "Bad Handlebars. Bad.",
			message: "<%= error.message %>! How could you?"
		}))
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			root: 'exports',
			noRedeclare: true // Avoid duplicate declarations
		}))
		.pipe(concat('templates.js'))
		.pipe(wrap('var Handlebars = require("handlebars");\n <%= contents %>'))
		.pipe(gulp.dest(config.paths.dist+'/js'));

};
