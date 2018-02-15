let gulp = require('gulp');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let browserify = require('browserify');
let transform = require('vinyl-transform');
let buffer = require('vinyl-buffer');
let babelify = require('babelify');
let source = require('vinyl-source-stream');


let DEST = 'app/';
let b = browserify({
    entries:'src/scripts/app.js',
    debug: true
}).transform(babelify.configure({
    presets: ["es2015"]
}));

// gulp.task('scripts', function () {
//     gulp.src('scripts/**/*.js')
//     // This will output the non-minified version
//
//         browserify({
//         entries:'scripts/app.js',
//         debug: true
//     })
//         .bundle()
//         .pipe(source('app.js'))
//         .pipe(buffer())
//         .pipe(gulp.dest(DEST))
//
//         // This will minify and rename to app.min.js
//         .pipe(uglify())
//         .pipe(concat('app.js'))
//         .pipe(rename({extname: '.min.js'}))
//         .pipe(gulp.dest(DEST));
// });

gulp.task('scripts', function() {
    return b.bundle()
        .pipe(source('app.js')) // gives streaming vinyl file object
        .pipe(gulp.dest(DEST))
        //.pipe(buffer()) // <----- convert from streaming to buffered vinyl file object

        // .pipe(uglify())// now gulp-uglify works
        // .pipe(rename({extname: '.min.js'}))
        // .pipe(gulp.dest(DEST));
});

