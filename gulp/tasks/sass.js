/**
* Gulp - Sass
* -----------------
*/
// Build and

var	// require gulp configuration file
	config = require('../config'),

	// require gulp and various plugins
	gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	util = require('gulp-util'),
	gulpif = require('gulp-if'),
	crypto = require('crypto'),
	sourcemaps = require('gulp-sourcemaps'),
	notify = require('gulp-notify');


module.exports = function() {

	  //store if we're requesting maps
    var useMaps = util.env.maps ? true : false

		console.log("Building with source maps? " + useMaps);

    // uncomment compressed style for production
    // easier in development to leave uncompressed
    return sass(config.paths.src+'/scss', {
        //style: 'compressed',
        sourcemap: useMaps,
        // Use the md5 of the current directory as
        // the container name so we never collide with
        // another environment on the same vps
        container: crypto.createHash('md5').update(__dirname).digest('hex')
    }).on('error', notify.onError({
        title: "SASS Failed",
        message: "<%= error.message %>"
    }))
    .pipe(gulpif(useMaps, sourcemaps.write('maps', {
      includeContent: false,
      sourceRoot: config.paths.sassSourceRoot
    })))
    .pipe(gulp.dest(config.paths.dist+'/css'));

};
