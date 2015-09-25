'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
		sass = require('gulp-sass'),
		maps = require('gulp-sourcemaps'),
		 del = require('del');

gulp.task('concatJS', function() {
	return gulp.src([
						'public/javascripts/jquery.cookie.js',
						'public/javascripts/foundation.js',
						'public/javascripts/foundation.abide.js',
						'public/javascripts/foundation.accordion.js',
						'public/javascripts/foundation.clearing.js',
						'public/javascripts/foundation.dropdown.js',
						'public/javascripts/foundation.interchange.js',
						'public/javascripts/foundation.joyride.js',
						'public/javascripts/foundation.offcanvas.js',
						'public/javascripts/foundation.reveal.js',
						'public/javascripts/foundation.slider.js',
						'public/javascripts/foundation.topbar.js',
						'public/javascripts/slider.js'])
		.pipe(concat('index.js'))
		.pipe(gulp.dest('public/javascripts'));
});

gulp.task('minifyJS', ['concatJS'], function() {
	return gulp.src('public/javascripts/index.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('public/javascripts'));
});

gulp.task('compileSass', function() {
	return gulp.src('public/stylesheets/scss/style.scss')
		.pipe(maps.init())
		.pipe(sass())
		.pipe(maps.write('./'))
		.pipe(gulp.dest('public/stylesheets/css'));
});

gulp.task('watch', function() {
	gulp.watch('public/stylesheets/scss/*.scss', ['compileSass']);
	gulp.watch('public/javascripts/index.js', ['concatJS']);
});

gulp.task('clean', function() {
	del(['dist', 'public/stylesheets/css/*.css', 'public/javascripts/*.js', 'public/images/*.jpg']);
});

gulp.task('build', ['minifyJS', 'compileSass'], function() {
	return gulp.src(['public/stylesheets/css/style.css', 'public/images/**', 'public/javascripts/app.min.js', 'public/index.html'], {base: './'})
		.pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watch']);

gulp.task('default', ['clean'], function() {
	gulp.start('build');
});
