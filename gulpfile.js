'use strict';

let gulp 	= require('gulp'),
	stylus	= require('gulp-stylus');

gulp.task('default', function(){
	return gulp.src('./public/stylus/app.styl')
    	.pipe(stylus())
    	.pipe(gulp.dest('./public/css'));
});
