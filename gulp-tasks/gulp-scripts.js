let gulp = require("gulp");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");
let rename = require("gulp-rename");
let browserify = require("browserify");
let transform = require("vinyl-transform");
let buffer = require("vinyl-buffer");
let babelify = require("babelify");
let source = require("vinyl-source-stream");
let strip = require('gulp-strip-comments');

let DEST = "app/";
let b = browserify({
    entries:"src/scripts/app.js",
    debug: true
}).transform(babelify.configure({
    presets: ["es2015"],
    sourceMap: false
}));


gulp.task("scripts", function() {
    return b.bundle()
        .pipe(source("app.js")) // gives streaming vinyl file object
        .pipe(buffer())
        .pipe(strip())
        .pipe(gulp.dest(DEST));
        //.pipe(buffer()) // <----- convert from streaming to buffered vinyl file object

        // .pipe(uglify())// now gulp-uglify works
        // .pipe(rename({extname: ".min.js"}))
        // .pipe(gulp.dest(DEST));
});

