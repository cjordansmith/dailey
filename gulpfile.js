//  Modules & Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var myth = require('gulp-myth');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var connect = require('connect');
var serve = require('serve-static');
var browsersync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var plumber = require('gulp-plumber');
var beeper = require('beeper');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');

//  Error Helper
function onError(err) {
   beeper();
   console.log(err);
}

//  Less Task
gulp.task('less', function() {
   return gulp.src('app/less/*.less')
      .pipe(plumber({
         errorHandler: onError
      }))
      .pipe(less('less.css'))
      .pipe(gulp.dest('dist/css'));
});

// Styles Task
gulp.task('styles', function() {
   return gulp.src('app/css/*.css')
      .pipe(plumber({
         errorHandler: onError
      }))
      .pipe(concat('all.css'))
      .pipe(myth())
      .pipe(gulp.dest('dist/css'));
});

//  Scripts Task
gulp.task('scripts', function() {
   return gulp.src('app/js/*.js')
      .pipe(sourcemaps.init())
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(concat('all.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('/'))
      .pipe(gulp.dest('dist/js'));
});

//  Images Task
gulp.task('images', function() {
   return gulp.src('app/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'));
});

// Server Task
gulp.task('server', function() {
   return connect().use(serve(__dirname))
      .listen(8080)
      .on('listening', function() {
         console.log('Server Running: View at http://localhost:8080');
      });
});

//  BrowserSync Task
//  localhost:3000
gulp.task('browsersync', function(cb) {
   return browsersync({
      server: {
         baseDir:'public'
      }
   }, cb);
});

//  Browserify Task
gulp.task('browserify', function() {
   return browserify('app/js/dailey.js')
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('dist/js'));
});

//  Clean Task
gulp.task('clean', function (cb) {
   del(['dist/*'], cb);
});

//  Watch Task
gulp.task('watch', function() {
   gulp.watch('app/less/*.css',
      gulp.series('clean', 'less', browsersync.reload));
   gulp.watch('app/js/*.js',
      gulp.series('clean', 'scripts', browsersync.reload));
   gulp.watch('app/img/*',
      gulp.series('clean', 'images', browsersync.reload));
});

//  Default Task
gulp.task('default', gulp.parallel('clean', 'less', 'styles', 'scripts', 'images', 'browsersync', 'watch'));
