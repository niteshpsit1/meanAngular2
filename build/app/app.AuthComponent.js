"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Core Services */
var core_1 = require('@angular/core');
/** User defined Services */
var app_authService_1 = require('./app.authService');
var AuthComponent = (function () {
    function AuthComponent(_authService) {
        this._authService = _authService;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.user = {
            name: '',
            email: '',
            dob: '',
            password: ''
        };
    };
    AuthComponent.prototype.registerUser = function () {
        var _this = this;
        this._authService
            .registerUser(this.user)
            .subscribe(function (data) { return console.log(JSON.stringify(data)); }, function (Error) { return console.log("There is an error"); }, function () { return _this.ngOnInit(); });
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'Register',
            templateUrl: "views/register.html",
            providers: [app_authService_1.authService],
            styleUrls: []
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof app_authService_1.authService !== 'undefined' && app_authService_1.authService) === 'function' && _a) || Object])
    ], AuthComponent);
    return AuthComponent;
    var _a;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=app.AuthComponent.js.map