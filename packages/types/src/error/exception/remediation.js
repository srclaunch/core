"use strict";
exports.__esModule = true;
exports.RetryStrategy = void 0;
var RetryStrategy;
(function (RetryStrategy) {
    RetryStrategy["Simple"] = "simple";
    RetryStrategy["ExponentialBackoff"] = "exponential";
    RetryStrategy["CircuitBreaker"] = "circuit_breaker";
})(RetryStrategy = exports.RetryStrategy || (exports.RetryStrategy = {}));
