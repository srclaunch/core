"use strict";
exports.__esModule = true;
exports.PaymentIntentStatus = void 0;
var PaymentIntentStatus;
(function (PaymentIntentStatus) {
    PaymentIntentStatus["RequiresPaymentMethod"] = "requires_payment_method";
    PaymentIntentStatus["RequiresConfirmation"] = "requires_confirmation";
    PaymentIntentStatus["RequiresAction"] = "requires_action";
    PaymentIntentStatus["Processing"] = "processing";
    PaymentIntentStatus["RequiresCapture"] = "requires_capture";
    PaymentIntentStatus["Canceled"] = "canceled";
    PaymentIntentStatus["Succeeded"] = "succeeded";
})(PaymentIntentStatus = exports.PaymentIntentStatus || (exports.PaymentIntentStatus = {}));
