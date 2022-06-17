"use strict";
exports.__esModule = true;
exports.Action = exports.ActionType = exports.ActionStatus = void 0;
/* eslint-disable functional/prefer-readonly-type */
var ActionStatus;
(function (ActionStatus) {
    ActionStatus["Failure"] = "failure";
    ActionStatus["Initialized"] = "initialized";
    ActionStatus["Pending"] = "pending";
    ActionStatus["Running"] = "running";
    ActionStatus["Success"] = "success";
})(ActionStatus = exports.ActionStatus || (exports.ActionStatus = {}));
var ActionType;
(function (ActionType) {
    ActionType["Browser"] = "browser";
    ActionType["GitHub"] = "github";
    ActionType["Native"] = "native";
    ActionType["Universal"] = "universal";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var Action = /** @class */ (function () {
    function Action(input) {
        this.status = ActionStatus.Pending;
        this.type = ActionType.Universal;
        this.input = input;
        this.status = ActionStatus.Initialized;
    }
    return Action;
}());
exports.Action = Action;
