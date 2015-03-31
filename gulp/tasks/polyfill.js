/**
* Gulp - Pollyfill
* -------------
*/
// javascript polyfills compilation
// this can be adjusted per project spec

var	// require gulp configuration file
  config = require('../config'),

  // require gulp and various plugins
  gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  util = require('gulp-util'),
	gulpif = require('gulp-if');


module.exports = function(){

  var doUglify = util.env.ugly ? true : false

  gulp.task('polyfill', function() {

      return gulp.src([
              // html5 shiv
              config.paths.bower+'/html5shiv/html5shiv.js',
              // matchMedia polyfill
              config.paths.bower+'/matchmedia/matchmedia.js',
              // media query polyfill
              config.paths.bower+'/respond/dest/respond.min.js'
          ])
          .pipe(gulpif(doUglify, uglify()))
          .pipe(concat('polyfill.js'))
          .pipe(gulp.dest(config.paths.dist+'/js/'))
  });

}
