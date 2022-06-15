"use strict";
exports.__esModule = true;
exports.LogLevel = void 0;
/*
  This is a decent start, but I should make the log level TSDoc's more clear
  of the intention and expected result from using each level.
*/
var LogLevel;
(function (LogLevel) {
    /**
     * Analytics (Business/Web) related events.
     */
    LogLevel["Analytics"] = "analytics";
    /**
     * Exception that needs urgent review by engineers.
     */
    LogLevel["Critical"] = "critical";
    /**
     * Logging used by developers to temporarily debug an issue.
     */
    LogLevel["Debug"] = "debug";
    /**
     * A runtime error that does not require immediate attention.
     */
    LogLevel["Error"] = "error";
    /**
     * An HTTP request/response event. Default is 'info' level.
     */
    LogLevel["Http"] = "http";
    /**
     * Used for logging general information regarding application processes.
     */
    LogLevel["Info"] = "info";
    /**
     * Used to warn about possible issues.
     */
    LogLevel["Warning"] = "warning";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
