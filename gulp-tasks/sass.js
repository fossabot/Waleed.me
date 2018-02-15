let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let minifyCss = require('gulp-minify-css');
let browserSync = require('browser-sync');
let livereload = require('gulp-livereload');
let reload = browserSync.reload;

let DEST = 'app/css';
gulp.task('sass', function () {
    gulp.src('src/scss/styles.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(gulp.dest(DEST))
        .pipe(livereload());
});

