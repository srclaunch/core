"use strict";
exports.__esModule = true;
exports.StreetAddressCondition = exports.StateCondition = exports.ProvinceCondition = exports.PostalCodeCondition = exports.LongitudeCondition = exports.LatitudeCondition = exports.CountryCondition = exports.CityCondition = void 0;
var CityCondition;
(function (CityCondition) {
    CityCondition["IsAlpha"] = "is-alpha";
    CityCondition["IsEqual"] = "is-equal";
    CityCondition["IsInList"] = "is-in-list";
    CityCondition["IsNotEqual"] = "is-not-equal";
    CityCondition["IsNotInList"] = "is-not-in-list";
    CityCondition["IsNotNull"] = "is-not-null";
    CityCondition["IsString"] = "is-string";
})(CityCondition = exports.CityCondition || (exports.CityCondition = {}));
var CountryCondition;
(function (CountryCondition) {
    CountryCondition["IsAlpha"] = "is-alpha";
    CountryCondition["IsCountry"] = "is-country";
    CountryCondition["IsEqual"] = "is-equal";
    CountryCondition["IsInList"] = "is-in-list";
    CountryCondition["IsNotEqual"] = "is-not-equal";
    CountryCondition["IsNotInList"] = "is-not-in-list";
    CountryCondition["IsNotNull"] = "is-not-null";
    CountryCondition["IsString"] = "is-string";
})(CountryCondition = exports.CountryCondition || (exports.CountryCondition = {}));
var LatitudeCondition;
(function (LatitudeCondition) {
    LatitudeCondition["IsEqual"] = "is-equal";
    LatitudeCondition["IsFloat"] = "is-float";
    LatitudeCondition["IsNotEqual"] = "is-not-equal";
    LatitudeCondition["IsNotNull"] = "is-not-null";
    LatitudeCondition["IsNumeric"] = "is-numeric";
})(LatitudeCondition = exports.LatitudeCondition || (exports.LatitudeCondition = {}));
var LongitudeCondition;
(function (LongitudeCondition) {
    LongitudeCondition["IsEqual"] = "is-equal";
    LongitudeCondition["IsFloat"] = "is-float";
    LongitudeCondition["IsNotEqual"] = "is-not-equal";
    LongitudeCondition["IsNotNull"] = "is-not-null";
    LongitudeCondition["IsNumeric"] = "is-numeric";
})(LongitudeCondition = exports.LongitudeCondition || (exports.LongitudeCondition = {}));
var PostalCodeCondition;
(function (PostalCodeCondition) {
    PostalCodeCondition["IsEqual"] = "is-equal";
    PostalCodeCondition["IsNotEqual"] = "is-not-equal";
    PostalCodeCondition["IsPostalCode"] = "is-postal-code";
    PostalCodeCondition["IsNotNull"] = "is-not-null";
})(PostalCodeCondition = exports.PostalCodeCondition || (exports.PostalCodeCondition = {}));
var ProvinceCondition;
(function (ProvinceCondition) {
    ProvinceCondition["IsAlpha"] = "is-alpha";
    ProvinceCondition["IsEqual"] = "is-equal";
    ProvinceCondition["IsInList"] = "is-in-list";
    ProvinceCondition["IsNotEqual"] = "is-not-equal";
    ProvinceCondition["IsNotInList"] = "is-not-in-list";
    ProvinceCondition["IsNotNull"] = "is-not-null";
    ProvinceCondition["IsProvince"] = "is-province";
    ProvinceCondition["IsString"] = "is-string";
})(ProvinceCondition = exports.ProvinceCondition || (exports.ProvinceCondition = {}));
var StateCondition;
(function (StateCondition) {
    StateCondition["IsAlpha"] = "is-alpha";
    StateCondition["IsEqual"] = "is-equal";
    StateCondition["IsInList"] = "is-in-list";
    StateCondition["IsNotEqual"] = "is-not-equal";
    StateCondition["IsNotInList"] = "is-not-in-list";
    StateCondition["IsNotNull"] = "is-not-null";
    StateCondition["IsState"] = "is-state";
    StateCondition["IsString"] = "is-string";
})(StateCondition = exports.StateCondition || (exports.StateCondition = {}));
var StreetAddressCondition;
(function (StreetAddressCondition) {
    StreetAddressCondition["IsAlphanumeric"] = "is-alphanumeric";
    StreetAddressCondition["IsEqual"] = "is-equal";
    StreetAddressCondition["IsNotEqual"] = "is-not-equal";
    StreetAddressCondition["IsNotNull"] = "is-not-null";
    StreetAddressCondition["IsString"] = "is-string";
    StreetAddressCondition["IsStreetAddress"] = "is-street-address";
})(StreetAddressCondition = exports.StreetAddressCondition || (exports.StreetAddressCondition = {}));
