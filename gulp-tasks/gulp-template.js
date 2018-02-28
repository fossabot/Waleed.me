
let gulp = require("gulp");
let templateCache = require("gulp-angular-templatecache");
let htmlMin = require("gulp-htmlmin");

gulp.task("html-templates", function () {
    return gulp.src("src/templates/**/*.html")
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(templateCache("templates-cache.js",{
            module: "templateCache",
            standalone: true
        }))
        .pipe(gulp.dest("./"));
});