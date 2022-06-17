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
exports.GitHubAction = exports.GitHubActions = exports.GitHubRunnerOS = void 0;
var _1 = require(".");
var GitHubRunnerOS;
(function (GitHubRunnerOS) {
    GitHubRunnerOS["UbuntuLatest"] = "ubuntu-latest";
})(GitHubRunnerOS = exports.GitHubRunnerOS || (exports.GitHubRunnerOS = {}));
var GitHubActions;
(function (GitHubActions) {
    GitHubActions["Cache"] = "actions/cache@v3";
    GitHubActions["Checkout"] = "actions/checkout@v3";
    GitHubActions["DownloadArtifact"] = "actions/download-artifact@v3";
    GitHubActions["SetupNode"] = "actions/setup-node@v3";
    GitHubActions["UploadArtifact"] = "actions/upload-artifact@v3";
})(GitHubActions = exports.GitHubActions || (exports.GitHubActions = {}));
var GitHubAction = /** @class */ (function (_super) {
    __extends(GitHubAction, _super);
    function GitHubAction(input) {
        var _this = _super.call(this, input) || this;
        _this.type = _1.ActionType.GitHub;
        return _this;
    }
    return GitHubAction;
}(_1.Action));
exports.GitHubAction = GitHubAction;
