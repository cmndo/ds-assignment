var	// require gulp configuration file
	config = require('../config'),

	// require gulp and various plugins
	gulp = require('gulp'),
	iconfont = require('gulp-iconfont'),
	iconfontCss = require('gulp-iconfont-css'),
	fontName = 'ds-icons';

module.exports = function(){

		gulp.src([config.paths.images + '/icons/*.svg'])
			.pipe(iconfontCss({
				fontName: fontName,
				path: config.paths.src + "/scss/templates/_icons.scss",
				targetPath: "../../src/scss/components/_icons.scss",
				fontPath: "../../../fonts/icons/"
			}))
			.pipe(iconfont({
				fontName: fontName,
				normalize: true
			}))
			.pipe(gulp.dest(config.paths.fonts + '/icons'));

}
