
let gulp = require("gulp");
let templateCache = require("gulp-angular-templatecache");

gulp.task("html-templates", function () {
    return gulp.src("src/templates/**/*.html")
        .pipe(templateCache("templates-cache.js",{
            module: "templateCache",
            standalone: true
        }))
        .pipe(gulp.dest("./"));
});