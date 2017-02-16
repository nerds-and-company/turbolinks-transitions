const gulp = require('gulp');
const webserver = require('gulp-webserver');
 
gulp.task('webserver', () => {
  gulp.src('.')
    .pipe(webserver({
      livereload: false,
      directoryListing: true,
      open: true
    }));
});