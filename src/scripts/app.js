import "babel-polyfill";
import angular from "angular";
import uiRouter from "@uirouter/angularjs";
let router = require("./router");
import "../scss/styles.scss";

angular.module("app", [uiRouter]).config(router);
