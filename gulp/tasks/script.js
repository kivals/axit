const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');

function script() {
  return gulp
    .src('src/js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(gulp.dest('build/js/'))
    .pipe(uglify())
    .pipe(
      rename({
        extname: '.min.js',
      })
    )
    .pipe(gulp.dest('build/js/'));
}

module.exports = script;
