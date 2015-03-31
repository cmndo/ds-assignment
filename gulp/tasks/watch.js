/**
* Gulp - Watch
* -----------------
*/
//watch for sass/js changes and run appropriate tasks

var	// require gulp configuration file
	config = require('../config'),

	// require gulp and various plugins
	gulp = require('gulp'),
	//livereload = require('gulp-livereload'),
	browserSync = require('browser-sync'),
  reload = browserSync.reload,
  util = require('gulp-util'),
	gulpif = require('gulp-if'),
	fs = require('fs'),
	prompt = require('gulp-prompt'),
	needsPrompt = false,
	filename = "gulp/.vhost";


module.exports = function() {


	//does our vhost exist
	//check if gulp/.vhost has been created
  fs.exists(filename, function(exists) {
    if (!exists) {
      //prompt
      needsPrompt = true;
			gulp.src("gulpfile.js")
			.pipe(prompt.prompt({
		        name: 'vhost',
		        message: 'Please enter your vhost name'
		    }, function(res){
		        //value is in res.pass
						require('fs').writeFile(filename, res.vhost);
		        console.log("Virtual Host Set: " + res.vhost);
		    }));
    }else{
			//------------------------------------------- vhost Exists
			//read vhost file here
      fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;

				//start a browsersync session using the data of gulp/.vhost
				browserSync({
            proxy: data
        });

			//finally, we can watch the files we need -------------------------Good
			gulp.watch(config.paths.src+'/scss/**/*.scss', ['sass']);
		    gulp.watch(config.paths.src+'/js/**/*.js', ['browserify']);
		    gulp.watch(config.paths.images + "/icons/*.svg", ['icons']);

		    gulp.watch([
					config.paths.dist + '/css/*.css'
				])
				.on('change', function(file){
					gulp.src(file.path)
					.pipe(reload({stream:true}));
				});

				gulp.watch([
					config.paths.dist + '/js/*.js',
					config.paths.fonts + '/icons/*.woff',
					'templates/default_site/layouts.group/.main.html'
				])
				.on('change', reload);


      });



			//------------------------------------------- /vhost Exists
		}
  });

};
