const gulp = require('gulp');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
// const htmlValidator = require('gulp-w3c-html-validator');

module.exports = function pug2html() {
  return gulp
    .src('src/pug/index.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(plumber.stop())
    .pipe(gulp.dest('build'));
};
