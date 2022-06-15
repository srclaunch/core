"use strict";
exports.__esModule = true;
exports.BuildTool = exports.BuildTarget = exports.BuildPlatform = exports.BuildFormat = void 0;
var BuildFormat;
(function (BuildFormat) {
    BuildFormat["CJS"] = "cjs";
    BuildFormat["ESM"] = "esm";
    BuildFormat["IIFE"] = "iife";
    BuildFormat["UMD"] = "umd";
})(BuildFormat = exports.BuildFormat || (exports.BuildFormat = {}));
var BuildPlatform;
(function (BuildPlatform) {
    BuildPlatform["Browser"] = "browser";
    BuildPlatform["Node"] = "node";
    BuildPlatform["Universal"] = "universal";
})(BuildPlatform = exports.BuildPlatform || (exports.BuildPlatform = {}));
var BuildTarget;
(function (BuildTarget) {
    BuildTarget["ES5"] = "es5";
    BuildTarget["ES6"] = "es6";
    BuildTarget["ES2015"] = "es2015";
    BuildTarget["ES2016"] = "es2016";
    BuildTarget["ES2017"] = "es2017";
    BuildTarget["ES2018"] = "es2018";
    BuildTarget["ES2019"] = "es2019";
    BuildTarget["ES2020"] = "es2020";
    BuildTarget["ES2021"] = "es2021";
    BuildTarget["ES2022"] = "es2022";
    BuildTarget["ESNext"] = "esnext";
    BuildTarget["Latest"] = "latest";
    BuildTarget["Modules"] = "modules";
})(BuildTarget = exports.BuildTarget || (exports.BuildTarget = {}));
var BuildTool;
(function (BuildTool) {
    BuildTool["ESBuild"] = "esbuild";
    BuildTool["Vite"] = "vite";
})(BuildTool = exports.BuildTool || (exports.BuildTool = {}));
