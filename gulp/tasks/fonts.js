const gulp = require('gulp');
const ttf2wolf = require('gulp-ttf2woff');
const ttf2wolf2 = require('gulp-ttf2woff2');

function fonts() {
  return gulp
    .src('src/fonts/*.ttf')
    .pipe(ttf2wolf())
    .pipe(gulp.dest('build/fonts/'))
    .pipe(gulp.src('src/fonts/*.ttf'))
    .pipe(ttf2wolf2())
    .pipe(gulp.dest('build/fonts/'));
}

module.exports = fonts;
