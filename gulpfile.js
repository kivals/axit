const gulp = require('gulp');

const pug2html = require('./gulp/tasks/pug');
const serve = require('./gulp/tasks/serve');
const clean = require('./gulp/tasks/clean');
const scss = require('./gulp/tasks/scss');
const script = require('./gulp/tasks/script');
const fonts = require('./gulp/tasks/fonts.js');
const images = require('./gulp/tasks/image.js');


const build = gulp.parallel(pug2html, scss, script, fonts, images);
exports.default = gulp.series(clean, build, serve);
