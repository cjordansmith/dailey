//  Modules & Plugins
var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var beeper = require('beeper');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

//  Error Helper
function onError(err) {
   beeper();
   console.log(err);
}

//  Clean Task
function clean(path) {
   return del(path);
}
gulp.task('clean', function () {
    return clean('./public/css/*.css');
});

//  SASS Task
gulp.task('sass', function() {
   return gulp.src('./public/scss/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest('./public/css'));
});

//  SASS WATCH task
gulp.task('sass:watch', function () {
   gulp.watch(['./public/scss/*.scss'], gulp.series('clean', 'sass'));
});

gulp.task('default', gulp.series(
    'clean',
    'sass',
    'sass:watch'
));
// Styles Task
/*gulp.task('styles', function() {
   return gulp.src('app/css/*.css')
      .pipe(plumber({
         errorHandler: onError
      }))
      .pipe(concat('all.css'))
      .pipe(myth())
      .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function () {
   gulp.watch(, gulp.series(
      'clean',
      'sass'
   )());
});
*/

//  Scripts Task
/*gulp.task('scripts', function() {
   return gulp.src('app/js/*.js')
      .pipe(sourcemaps.init())
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(concat('all.js'))
      .pipe(uglify())
      .pipe(sourcemaps.write('/'))
      .pipe(gulp.dest('dist/js'));
});*/

//  Images Task
/*gulp.task('images', function() {
   return gulp.src('app/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'));
});*/

// Server Task
/*gulp.task('server', function() {
   return connect().use(serve(__dirname))
      .listen(8080)
      .on('listening', function() {
         console.log('Server Running: View at http://localhost:8080');
      });
});*/

//  BrowserSync Task
//  localhost:3000
/*gulp.task('browsersync', function(cb) {
   return browsersync({
      server: {
         baseDir:'public'
      }
   }, cb);
});*/

//  Browserify Task
/*gulp.task('browserify', function() {
   return browserify('app/js/dailey.js')
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('dist/js'));
});*/



//  Watch Task
/*gulp.task('watch', function() {
   gulp.watch('app/less/*.css',
      gulp.series('clean', 'less', browsersync.reload));
   gulp.watch('app/js/*.js',
      gulp.series('clean', 'scripts', browsersync.reload));
   gulp.watch('app/img/*',
      gulp.series('clean', 'images', browsersync.reload));
});*/
