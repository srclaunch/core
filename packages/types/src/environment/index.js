"use strict";
exports.__esModule = true;
exports.EnvironmentType = exports.Environments = void 0;
var Environments;
(function (Environments) {
    Environments["Development"] = "development";
    Environments["QA"] = "qa";
    Environments["Preview"] = "preview";
    Environments["Production"] = "production";
})(Environments = exports.Environments || (exports.Environments = {}));
var EnvironmentType;
(function (EnvironmentType) {
    EnvironmentType["CI"] = "CI";
    EnvironmentType["Development"] = "development";
    EnvironmentType["Production"] = "production";
})(EnvironmentType = exports.EnvironmentType || (exports.EnvironmentType = {}));
