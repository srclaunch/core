"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.GitHubWorkflow = void 0;
var _1 = require(".");
var GitHubWorkflow = /** @class */ (function (_super) {
    __extends(GitHubWorkflow, _super);
    function GitHubWorkflow(_a) {
        var branch = _a.branch, description = _a.description, input = _a.input, name = _a.name, tasks = _a.tasks;
        var _this = _super.call(this, { description: description, input: input, name: name, tasks: tasks }) || this;
        _this.branch = branch;
        return _this;
    }
    return GitHubWorkflow;
}(_1.Workflow));
exports.GitHubWorkflow = GitHubWorkflow;
