"use strict";
exports.__esModule = true;
exports.ChangeType = void 0;
var ChangeType;
(function (ChangeType) {
    /**
     * A change created from an automated source.
     */
    ChangeType["Automated"] = "automated";
    /**
     * Change that affect build components like build tool, ci pipeline, dependencies, project version
     */
    ChangeType["Build"] = "build";
    /**
     * Change that fix a bug
     */
    ChangeType["BugFix"] = "fix";
    /**
     * Miscellaneous change e.g. modifying .gitignore
     */
    ChangeType["Chore"] = "chore";
    /**
     * Change that affect documentation only
     */
    ChangeType["Documentation"] = "docs";
    /**
     * Change that adds a new feature
     */
    ChangeType["Feature"] = "feature";
    /**
     * Change that adds a new feature
     */
    ChangeType["Performance"] = "perf";
    /**
     * Change that rewrites/restructures your code, however does not change any behaviour
     */
    ChangeType["Refactor"] = "refactor";
    /**
     * Change that affects infrastructure, deployments, or releases
     */
    ChangeType["Release"] = "release";
    /**
     * Change that rolls back another change
     */
    ChangeType["RollBack"] = "revert";
    /**
     * Change to code that do not affect the meaning (white-space, formatting, missing semi-colons, etc)
     */
    ChangeType["Style"] = "style";
    /**
     * Change that add missing tests or fix/improve existing tests
     */
    ChangeType["Test"] = "test";
})(ChangeType = exports.ChangeType || (exports.ChangeType = {}));
