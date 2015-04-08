/**
* Gulp - JSHint
* -------------
*/
// run all JS files through JHint and halt build if not successfull

var	// require gulp configuration file
	config = require('../config'),

	// require gulp and various plugins
	gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),

	// Used in linting custom reporter
	map = require('map-stream'),
	events = require('events'),
	notify = require('gulp-notify'),
	emmitter = new events.EventEmitter(),
	path = require('path');


module.exports = function() {

	// Custom linting reporter used for error notify
	var jsHintErrorReporter = map(function (file, cb) {
		if (!file.jshint.success) {
			emmitter.emit('error', new Error("[jshint] failed. Check terminal."));
		}
		cb(null, file);
	});


	// pipe all JS through JSHint and halt build if not succesfull
	gulp.src([config.paths.src+'/js/**/*.js'])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter(stylish))
		.pipe(jsHintErrorReporter) // If error pop up a notify alert
		.on('error', notify.onError(function (error) {
			return error.message;
		}))
		.pipe(jshint.reporter('fail'));

};
