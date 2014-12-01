'use strict';
/** ===========================================================================
 * GulpFile
 *
 * @version 0.1.0
 * @example
 * // Developmet: Make Magical Things && Watch
 * $ gulp
 *
 * // Production: Clean Up && Compress
 * $ gulp -p
 * ========================================================================== */

/* Imports ------------------------------------------------------------------ */
var gulp = require('gulp');
var gUtil = require('gulp-util');
var gNotify = require('gulp-notify');
var gWatch = require('gulp-watch');
var gStylus = require('gulp-stylus');
var gAutoPrefix = require('gulp-autoprefixer');
var gCssComb = require('gulp-csscomb');
var gCsso = require('gulp-csso');
var gSize = require('gulp-size');
var del = require('del');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var bsReload = browserSync.reload;


/* Setting ------------------------------------------------------------------ */
var IS_PRODUCTION = gUtil.env.p || false;
var SRC = {
	styl: './src/stylus/*.styl',
	jsx: './src/javascript/app.jsx'
};
var DEST = {
	base: './build/',
	css: './build/css/',
	js: './build/js/'
};
var WATCH = {
  base: './src/',
	styl: "./src/stylus/**/*.styl",
	jsx: './src/javascript/**/*.jsx',
	html: './build/*.html'
};
var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];
var STYLUS_INCLUDE_DIRS = [
	'./node_modules/normalize.css/'
];


/* Clean Up ----------------------------------------------------------------- */
gulp.task('clean:css', del.bind(null, [DEST.css + '*.css']));
gulp.task('clean:js', del.bind(null, [DEST.js + '*.js']));
gulp.task('clean', ['clean:css', 'clean:js']);


/* Stylus ------------------------------------------------------------------- */
// FIXME: Maybe wrap gulp.src in gulp-watch and serve via callback
gulp.task('stylus', ['clean:css'], function(){
	return gulp.src(SRC.styl)
		.pipe(gStylus({include: STYLUS_INCLUDE_DIRS, 'include css': true}))
		.on('error', gNotify.onError({title:'Stylus Compile Error', message:"<%= error.message %>"}))
		.pipe(gAutoPrefix({browsers: AUTOPREFIXER_BROWSERS}))
		.pipe(gCssComb())
		.pipe(IS_PRODUCTION ? gCsso(false) : gUtil.noop())	// Disable CSSO opt: structureMinimization
		.pipe(gulp.dest(DEST.css))
		.pipe(IS_PRODUCTION ? gUtil.noop() : bsReload({stream:true}))
		.pipe(gSize({title: 'styles'}));
});


/* Browserify --------------------------------------------------------------- */
gulp.task('browserify', ['clean:js'], function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add(SRC.jsx);
  return b.bundle()
		//.on('error', errorHandler)
		.on('error', gNotify.onError({title:'Browserify Compile Error', message:"<%= error.message %>\n<%= error.stack %>"}))
    .pipe(source('main.js'))
    .pipe(gulp.dest(DEST.js));
});


/* BrowserSync -------------------------------------------------------------- */
gulp.task('serve', ['stylus', 'browserify'], function(cb){
	if (IS_PRODUCTION) {
		cb();
		return;
	}
	browserSync({
		notify: true,
		server: {
		  baseDir: DEST.base
		}
	});

	gWatch(WATCH.styl, {name:'Stylus'}, function(files, done){
		gulp.start('stylus', done);
	});

	gWatch(WATCH.jsx, {name:'Browserify'}, function(files, done){
		gulp.start('browserify', done);
		bsReload();
	});

	gulp.watch(WATCH.html, bsReload);
	cb();
});


/* Default ------------------------------------------------------------------ */
gulp.task('default', ['serve']);
