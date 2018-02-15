let gulp = require('gulp');
let connect = require('gulp-connect');
let modRewrite = require('connect-modrewrite');


gulp.task('serve',function () {

    connect.server({
        root: './app',
        livereload: true,
        port: 2222,
    });

    function reload() {
        connect.reload();
    }

    gulp.watch('src/scripts/**/*.js', ['scripts'], reload());
    gulp.watch('src/scss/**/*.{sass,scss}', ['sass'], reload());
    gulp.watch('src/index.html', ['build'], reload());
    gulp.watch('src/templates/**/*.html', reload());

});