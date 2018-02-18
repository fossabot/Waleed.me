
let gulp = require("gulp");


let requireDir = require("require-dir");

requireDir("./gulp-tasks");

gulp.task("default",["help"]);

gulp.task("make", ["html-templates", "sass", "scripts","build"]);

gulp.task("run", ["make","serve"]);