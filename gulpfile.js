
let gulp = require('gulp');


let requireDir = require('require-dir');

requireDir('./gulp-tasks');

gulp.task('default',['help']);

gulp.task('make', ['sass', 'scripts', 'build'], function () {

});


gulp.task('serve', ['make', 'run']);