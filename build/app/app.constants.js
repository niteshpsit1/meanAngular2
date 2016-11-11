"use strict";
var AppConstants = (function () {
    function AppConstants() {
    }
    Object.defineProperty(AppConstants, "API_ENDPOINT", {
        get: function () { return 'http://127.0.0.1:8080'; },
        enumerable: true,
        configurable: true
    });
    return AppConstants;
}());
exports.AppConstants = AppConstants;
//# sourceMappingURL=app.constants.js.map