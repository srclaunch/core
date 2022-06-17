"use strict";
exports.__esModule = true;
exports.SocialSecurityNumberCondition = exports.PhoneNumberCondition = exports.PasswordCondition = exports.PassportNumberCondition = exports.LicensePlateNumber = exports.EmailAddressCondition = exports.CreditCardCondition = void 0;
var CreditCardCondition;
(function (CreditCardCondition) {
    CreditCardCondition["IsCreditCard"] = "is-credit-card";
    CreditCardCondition["IsEqual"] = "is-equal";
    CreditCardCondition["IsLengthEqual"] = "is-length-equal";
    CreditCardCondition["IsLengthGreaterThan"] = "is-length-greater-than";
    CreditCardCondition["IsLengthGreaterThanOrEqual"] = "is-length-great-than-or-equal";
    CreditCardCondition["IsLengthLessThan"] = "is-length-less-than";
    CreditCardCondition["IsLengthLessThanOrEqual"] = "is-length-less-than-or-equal";
    CreditCardCondition["IsNotEqual"] = "is-not-equal";
    CreditCardCondition["IsNotNull"] = "is-not-null";
    CreditCardCondition["IsRegexMatch"] = "is-regex-match";
    CreditCardCondition["IsNotRegexMatch"] = "is-not-regex-match";
})(CreditCardCondition = exports.CreditCardCondition || (exports.CreditCardCondition = {}));
var EmailAddressCondition;
(function (EmailAddressCondition) {
    EmailAddressCondition["isEmailAddress"] = "is-email-address";
    EmailAddressCondition["IsEqual"] = "is-equal";
    EmailAddressCondition["IsInList"] = "is-in-list";
    EmailAddressCondition["IsLengthEqual"] = "is-length-equal";
    EmailAddressCondition["IsLengthGreaterThan"] = "is-length-greater-than";
    EmailAddressCondition["IsLengthGreaterThanOrEqual"] = "is-length-great-than-or-equal";
    EmailAddressCondition["IsLengthLessThan"] = "is-length-less-than";
    EmailAddressCondition["IsLengthLessThanOrEqual"] = "is-length-less-than-or-equal";
    EmailAddressCondition["IsNotEqual"] = "is-not-equal";
    EmailAddressCondition["IsNotInList"] = "is-not-in-list";
    EmailAddressCondition["IsNotNull"] = "is-not-null";
    EmailAddressCondition["IsRegexMatch"] = "is-regex-match";
    EmailAddressCondition["IsNotRegexMatch"] = "is-not-regex-match";
})(EmailAddressCondition = exports.EmailAddressCondition || (exports.EmailAddressCondition = {}));
var LicensePlateNumber;
(function (LicensePlateNumber) {
    LicensePlateNumber["IsLicensePlateNumber"] = "is-license-plate-number";
    LicensePlateNumber["IsNotNull"] = "is-not-null";
    LicensePlateNumber["IsNotRegexMatch"] = "is-not-regex-match";
    LicensePlateNumber["IsString"] = "is-string";
    LicensePlateNumber["IsRegexMatch"] = "is-regex-match";
})(LicensePlateNumber = exports.LicensePlateNumber || (exports.LicensePlateNumber = {}));
var PassportNumberCondition;
(function (PassportNumberCondition) {
    PassportNumberCondition["IsNotNull"] = "is-not-null";
    PassportNumberCondition["IsPassportNumber"] = "is-passport-number";
    PassportNumberCondition["IsString"] = "is-string";
    PassportNumberCondition["IsRegexMatch"] = "is-regex-match";
})(PassportNumberCondition = exports.PassportNumberCondition || (exports.PassportNumberCondition = {}));
var PasswordCondition;
(function (PasswordCondition) {
    PasswordCondition["IsComplexEnough"] = "is-complex-enough";
    PasswordCondition["IsInList"] = "is-in-list";
    PasswordCondition["IsNotInList"] = "is-not-in-list";
    PasswordCondition["IsNotNull"] = "is-not-null";
    PasswordCondition["IsNotRegexMatch"] = "is-not-regex-match";
    PasswordCondition["IsLengthGreaterThan"] = "is-length-greater-than";
    PasswordCondition["IsLengthGreaterThanOrEqual"] = "is-length-great-than-or-equal";
    PasswordCondition["IsLengthLessThan"] = "is-length-less-than";
    PasswordCondition["IsLengthLessThanOrEqual"] = "is-length-less-than-or-equal";
    PasswordCondition["IsStrongPassword"] = "is-strong-password";
    PasswordCondition["IsString"] = "is-string";
    PasswordCondition["IsRegexMatch"] = "is-regex-match";
})(PasswordCondition = exports.PasswordCondition || (exports.PasswordCondition = {}));
var PhoneNumberCondition;
(function (PhoneNumberCondition) {
    PhoneNumberCondition["IsNotNull"] = "is-not-null";
    PhoneNumberCondition["IsNotRegexMatch"] = "is-not-regex-match";
    PhoneNumberCondition["IsNumber"] = "is-number";
    PhoneNumberCondition["IsPhoneNumber"] = "is-phone-number";
    PhoneNumberCondition["IsRegexMatch"] = "is-regex-match";
})(PhoneNumberCondition = exports.PhoneNumberCondition || (exports.PhoneNumberCondition = {}));
var SocialSecurityNumberCondition;
(function (SocialSecurityNumberCondition) {
    SocialSecurityNumberCondition["IsNotNull"] = "is-not-null";
    SocialSecurityNumberCondition["IsSSN"] = "is-ssn";
    SocialSecurityNumberCondition["IsString"] = "is-string";
    SocialSecurityNumberCondition["IsRegexMatch"] = "is-regex-match";
})(SocialSecurityNumberCondition = exports.SocialSecurityNumberCondition || (exports.SocialSecurityNumberCondition = {}));
