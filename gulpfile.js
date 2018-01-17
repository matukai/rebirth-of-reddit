const gulp = require('gulp');
const sass = require('gulp-sass');

// ** glob   * wildcard   look in sass folder anything that ends with .scss bring in
// compile sass to css folder
// SASS Compilation task

gulp.task('styles', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss', ['styles']);
});

// SASS Watcher
gulp.task('default', ['watch']);