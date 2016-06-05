var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('default', ['bs-less', 'less', 'watch']);

gulp.task('bs-less', function() {
   gulp.src('./public/bootstrap/less/main.less')
      .pipe(less())
      .pipe(gulp.dest('./public/css'))
      .pipe(livereload());
});

gulp.task('less', function() {
   gulp.src('./public/less/style.less')
      .pipe(less())
      .pipe(gulp.dest('./public/css'))
      .pipe(livereload());
});

gulp.task('watch', function() {
   livereload.listen();
   gulp.watch('./public/bootstrap/less/main.less', ['less']);
});

/*gulp.task('less', function() {
   gulp.src('./public/bootstrap/less/main.less')
      .pipe(watch())
      .pipe(less())
      .pipe(gulp.dest('./public/css'))
      .pipe(livereload());
});*/
