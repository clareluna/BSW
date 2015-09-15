'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
		sass = require('gulp-sass'),
		maps = require('gulp-sourcemaps'),
		 del = require('del');

gulp.task('concatJS', function() {
	return gulp.src(['public/js/jquery.cookie.js',
						'public/js/foundation.js',
						'public/js/foundation.abide.js',
						'public/js/foundation.accordion.js',
						'public/js/foundation.clearing.js',
						'public/js/foundation.dropdown.js',
						'public/js/foundation.interchange.js',
						'public/js/foundation.joyride.js',
						'public/js/foundation.offcanvas.js',
						'public/js/foundation.reveal.js',
						'public/js/foundation.slider.js',
						'public/js/foundation.topbar.js',])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('minifyJS', ['concatJS'], function() {
	return gulp.src('public/js/app.js')
		.pipe(uglify())
		.pipe(rename('app.min.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('compileSass', function() {
	return gulp.src('public/scss/style.scss')
		.pipe(maps.init())
		.pipe(sass())
		.pipe(maps.write('./'))
		.pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
	gulp.watch('public/scss/*.scss', ['compileSass']);
	gulp.watch('public/js/app.js', ['concatJS']);
});

gulp.task('clean', function() {
	del(['dist', 'public/css/*.css', 'public/js/*.js', 'public/img/Kittinder.svg']);
});

gulp.task('build', ['minifyJS', 'compileSass'], function() {
	return gulp.src(['public/css/style.css', 'public/img/**', 'public/js/app.min.js', 'public/index.html'], {base: './'})
		.pipe(gulp.dest('dist'));
});

gulp.task('serve', ['watch']);

gulp.task('default', ['clean'], function() {
	gulp.start('build');
});
