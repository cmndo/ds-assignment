/**
* Gulp - Browserify
* -----------------
*/
// run all JS pages files through browserify, concat, uglify and save to dist

var	// require gulp configuration file
	config = require('../config'),

	// require gulp and various plugins
	gulp = require('gulp'),
	browserify = require('browserify'),
	transform = require('vinyl-transform'),
	notify = require('gulp-notify'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	util = require('gulp-util'),
	gulpif = require('gulp-if');


module.exports = function() {

	// handle browseirfying bundle
	var browserified = transform(function(filename) {
		var b = browserify({entries: filename, debug: true});
		return b.bundle();
	});

	//run jshint if useing --hint flag
	var useHint = util.env.hint ? true : false
	if(useHint){
		gulp.run('jshint');
	}

	//check if we need to uglify
	//run uglify if useing --ugly flag
	var doUglify = util.env.ugly ? true : false

	// pipe all JS pages files through JSHint, browserify, uglify and finally save to dist
	gulp.src([config.paths.src+'/js/main.js'])
		.pipe(browserified).on('error', notify.onError({
			title: "Build Failed",
			message: "<%= error.message %>"
		}))
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(gulpif(doUglify, uglify({
			warnings: false
		})))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest(config.paths.dist+'/js'));

};
