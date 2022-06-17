"use strict";
exports.__esModule = true;
exports.SubscriptionPlanDuration = exports.SubscriptionStatus = void 0;
var SubscriptionStatus;
(function (SubscriptionStatus) {
    SubscriptionStatus["Incomplete"] = "incomplete";
    SubscriptionStatus["IncompleteExpired"] = "incomplete_expired";
    SubscriptionStatus["Trialing"] = "trialing";
    SubscriptionStatus["Active"] = "active";
    SubscriptionStatus["PastDue"] = "past_due";
    SubscriptionStatus["Canceled"] = "canceled";
    SubscriptionStatus["Unpaid"] = "unpaid";
})(SubscriptionStatus = exports.SubscriptionStatus || (exports.SubscriptionStatus = {}));
var SubscriptionPlanDuration;
(function (SubscriptionPlanDuration) {
    SubscriptionPlanDuration["Monthly"] = "monthly";
    SubscriptionPlanDuration["Quarterly"] = "quarterly";
    SubscriptionPlanDuration["Yearly"] = "yearly";
    SubscriptionPlanDuration["Lifetime"] = "lifetime";
})(SubscriptionPlanDuration = exports.SubscriptionPlanDuration || (exports.SubscriptionPlanDuration = {}));
