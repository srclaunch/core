"use strict";
exports.__esModule = true;
exports.EthereumAddressCondition = exports.BitcoinAddressCondition = exports.CurrencyCondition = void 0;
var CurrencyCondition;
(function (CurrencyCondition) {
    CurrencyCondition["IsBetween"] = "is-between";
    CurrencyCondition["IsCurrency"] = "is-currency";
    CurrencyCondition["IsDecimal"] = "is-decimal";
    CurrencyCondition["IsDivisibleBy"] = "is-divisible-by";
    CurrencyCondition["IsEvenNumber"] = "is-even-number";
    CurrencyCondition["IsFloat"] = "is-float";
    CurrencyCondition["IsGreaterThan"] = "greater-than";
    CurrencyCondition["IsGreaterThanOrEqual"] = "greater-than-or-equal";
    CurrencyCondition["IsInteger"] = "is-integer";
    CurrencyCondition["IsISO8601"] = "is-iso-8601";
    CurrencyCondition["IsLessThan"] = "less-than";
    CurrencyCondition["IsLessThanOrEqual"] = "less-than-or-equal";
    CurrencyCondition["IsNegativeNumber"] = "is-negative-number";
    CurrencyCondition["IsNotEqual"] = "is-not-equal";
    CurrencyCondition["IsNotNull"] = "is-not-null";
    CurrencyCondition["IsNumber"] = "is-number";
    CurrencyCondition["IsOddNumber"] = "is-odd-number";
    CurrencyCondition["IsPositiveNumber"] = "is-positive-number";
})(CurrencyCondition = exports.CurrencyCondition || (exports.CurrencyCondition = {}));
var BitcoinAddressCondition;
(function (BitcoinAddressCondition) {
    BitcoinAddressCondition["IsBitcoinAddress"] = "is-bitcoin-address";
    BitcoinAddressCondition["IsEqual"] = "is-equal";
    BitcoinAddressCondition["IsNotEqual"] = "is-not-equal";
    BitcoinAddressCondition["IsNotNull"] = "is-not-null";
})(BitcoinAddressCondition = exports.BitcoinAddressCondition || (exports.BitcoinAddressCondition = {}));
var EthereumAddressCondition;
(function (EthereumAddressCondition) {
    EthereumAddressCondition["IsEthereumAddress"] = "is-ethereum-address";
    EthereumAddressCondition["IsEqual"] = "is-equal";
    EthereumAddressCondition["IsNotEqual"] = "is-not-equal";
    EthereumAddressCondition["IsNotNull"] = "is-not-null";
})(EthereumAddressCondition = exports.EthereumAddressCondition || (exports.EthereumAddressCondition = {}));
