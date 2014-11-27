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
var gWatch = require('gulp-watch');
var gStylus = require('gulp-stylus');
var gAutoPrefix = require('gulp-autoprefixer');
var gCssComb = require('gulp-csscomb');
var gCsso = require('gulp-csso');
var gSize = require('gulp-size');
var del = require('del');
var browserSync = require('browser-sync');
var bsReload = browserSync.reload;


/* Setting ------------------------------------------------------------------ */
var IS_PRODUCTION = gUtil.env.p || false;
var SRC = {
	styl: './src/stylus/*.styl'
};
var DEST = {
	base: './build/',
	css: './build/css/'
};
var WATCH = {
  base: './src/',
	styl: "./src/stylus/**/*.styl",
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
gulp.task('clean', ['clean:css']);


/* StyleSheet --------------------------------------------------------------- */
gulp.task('stylus', ['clean:css'], function(cb){
	gulp.src(SRC.styl)
		.pipe(IS_PRODUCTION ? gUtil.noop() : gWatch(WATCH.styl,{name:'Stylus'}))
		.pipe(gStylus({include: STYLUS_INCLUDE_DIRS, 'include css': true}))
		.pipe(gAutoPrefix({browsers: AUTOPREFIXER_BROWSERS}))
		.pipe(gCssComb())
		.pipe(IS_PRODUCTION ? gCsso(false) : gUtil.noop())	// Disable CSSO opt: structureMinimization
		.pipe(gulp.dest(DEST.css))
		.pipe(IS_PRODUCTION ? gUtil.noop() : bsReload({stream:true}))
		.pipe(gSize({title: 'styles'}));
	
	// Because of Gulp-Watch... gross
	cb();
});


/* BrowserSync -------------------------------------------------------------- */
gulp.task('serve', ['stylus'], function(cb){
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
	gulp.watch(WATCH.html, bsReload);
	cb();
});


/* Default ------------------------------------------------------------------ */
gulp.task('default', ['serve']);
