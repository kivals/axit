const gulp = require('gulp');
const plumber = require('gulp-plumber');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

function style() {
  return gulp
    .src('src/scss/style.scss')
    .pipe(plumber())
    .pipe(
      scss({
        outputStyle: 'expanded',
      })
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 5 versions'],
        cascade: true,
      })
    )
    .pipe(gulp.dest('build/css'))
    .pipe(cleanCSS())
    .pipe(
      rename({
        extname: '.min.css',
      })
    )
    .pipe(gulp.dest('build/css'));
}

module.exports = style;
