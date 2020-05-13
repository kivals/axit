const gulp = require('gulp');

// иконки awesome
function icons() {
  return gulp
    .src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(gulp.dest('build/fonts/awesome/'));
}
module.exports = icons;
