const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function minImages() {
  return gulp
    .src('src/img/**/*.{jpg,png,svg,gif,ico,webp}')
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3, // 0 to 7
      })
    )
    .pipe(gulp.dest('build/img/'));
}

module.exports = minImages;
