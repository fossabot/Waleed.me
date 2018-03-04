
let gulp = require("gulp");
let runSequence     = require("run-sequence");


let requireDir = require("require-dir");

requireDir("./gulp-tasks");

gulp.task("default",["help"]);

gulp.task("run", ["serve"]);

gulp.task("test",function () {

    runSequence(["sass","html-templates"],"scripts","build");
});

gulp.task("live", function () {

    runSequence(["sass","html-templates"],"scripts","build","serve");
});