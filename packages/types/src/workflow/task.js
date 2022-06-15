"use strict";
exports.__esModule = true;
exports.Task = exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Failure"] = "failure";
    TaskStatus["NotStarted"] = "not-started";
    TaskStatus["Pending"] = "pending";
    TaskStatus["Running"] = "running";
    TaskStatus["Success"] = "success";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
var Task = /** @class */ (function () {
    function Task(_a) {
        var description = _a.description, environment = _a.environment, id = _a.id, ifConditions = _a["if"], input = _a.input, name = _a.name, needs = _a.needs, output = _a.output, steps = _a.steps;
        this.description = '';
        this.environment = {};
        this.id = '';
        this["if"] = [];
        this.needs = [];
        this.status = TaskStatus.NotStarted;
        this.description = description !== null && description !== void 0 ? description : '';
        this.environment = environment !== null && environment !== void 0 ? environment : {};
        this.id = id !== null && id !== void 0 ? id : '';
        this["if"] = ifConditions !== null && ifConditions !== void 0 ? ifConditions : [];
        this.input = input;
        this.name = name !== null && name !== void 0 ? name : '';
        this.output = output;
        this.needs = needs !== null && needs !== void 0 ? needs : [];
        this.steps = steps !== null && steps !== void 0 ? steps : {};
    }
    return Task;
}());
exports.Task = Task;
