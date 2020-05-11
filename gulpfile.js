const gulp = require('gulp');

const pug2html = require('./gulp/tasks/pug');
const serve = require('./gulp/tasks/serve');
const clean = require('./gulp/tasks/clean');
const scss = require('./gulp/tasks/scss');
const script = require('./gulp/tasks/script');
const fonts = require('./gulp/tasks/fonts.js');

const build = gulp.parallel(pug2html, scss, script, fonts);
exports.default = gulp.series(clean, build, serve);
