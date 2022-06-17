"use strict";
exports.__esModule = true;
exports.TestReporter = exports.TestTool = void 0;
var TestTool;
(function (TestTool) {
    TestTool["Ava"] = "ava";
    TestTool["Jest"] = "jest";
    TestTool["Tape"] = "tape";
    TestTool["Vitest"] = "vitest";
})(TestTool = exports.TestTool || (exports.TestTool = {}));
var TestReporter;
(function (TestReporter) {
    TestReporter["Clover"] = "clover";
    TestReporter["Cobertura"] = "cobertura";
    TestReporter["HTML"] = "html";
    TestReporter["JSONSummary"] = "json-summary";
    TestReporter["JSON"] = "json";
    TestReporter["Lcov"] = "lcov";
    TestReporter["Lcovonly"] = "lcovonly";
    TestReporter["None"] = "none";
    TestReporter["TeamCity"] = "teamcity";
    TestReporter["TextLcov"] = "text-lcov";
    TestReporter["TextSummary"] = "text-summary";
    TestReporter["Text"] = "text";
})(TestReporter = exports.TestReporter || (exports.TestReporter = {}));
