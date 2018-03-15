
import angular from "angular";
import uiRouter from "@uirouter/angularjs";
import '../scss/styles.scss'
let router = require("./router");


angular.module("app", [uiRouter])
    .config(router);

