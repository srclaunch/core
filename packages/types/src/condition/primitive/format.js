"use strict";
exports.__esModule = true;
exports.MarkdownCondition = exports.JSONCondition = exports.HexadecimalCondition = void 0;
var HexadecimalCondition;
(function (HexadecimalCondition) {
    HexadecimalCondition["IsEqual"] = "is-equal";
    HexadecimalCondition["IsHexadecimal"] = "is-hexadecimal";
    HexadecimalCondition["IsLengthEqual"] = "is-length-equal";
    HexadecimalCondition["IsLengthGreaterThan"] = "is-length-greater-than";
    HexadecimalCondition["IsLengthGreaterThanOrEqual"] = "is-length-great-than-or-equal";
    HexadecimalCondition["IsLengthLessThan"] = "is-length-less-than";
    HexadecimalCondition["IsLengthLessThanOrEqual"] = "is-length-less-than-or-equal";
    HexadecimalCondition["IsNotEqual"] = "is-not-equal";
    HexadecimalCondition["IsNotNull"] = "is-not-null";
    HexadecimalCondition["IsString"] = "is-string";
})(HexadecimalCondition = exports.HexadecimalCondition || (exports.HexadecimalCondition = {}));
var JSONCondition;
(function (JSONCondition) {
    JSONCondition["IsEqual"] = "is-equal";
    JSONCondition["IsJSON"] = "is-json";
    JSONCondition["IsNotEqual"] = "is-not-equal";
    JSONCondition["IsNotNull"] = "is-not-null";
})(JSONCondition = exports.JSONCondition || (exports.JSONCondition = {}));
var MarkdownCondition;
(function (MarkdownCondition) {
    MarkdownCondition["IsEqual"] = "is-equal";
    MarkdownCondition["IsNotEqual"] = "is-not-equal";
    MarkdownCondition["IsNotNull"] = "is-not-null";
    MarkdownCondition["IsMarkdown"] = "is-markdown";
    MarkdownCondition["IsString"] = "is-string";
})(MarkdownCondition = exports.MarkdownCondition || (exports.MarkdownCondition = {}));
