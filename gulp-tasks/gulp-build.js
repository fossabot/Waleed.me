let gulp= require("gulp");


gulp.task("build", function () {

    gulp.src("src/index.html")
        .pipe(gulp.dest("app/"));

    gulp.src("src/templates/**")
        .pipe(gulp.dest("app/templates/"));

    gulp.src("src/assets/**")
        .pipe(gulp.dest("app/assets/"));

});
