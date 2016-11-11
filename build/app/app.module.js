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
/* Core Module */
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var router_1 = require('@angular/router');
/**/
/** Base Container */
var app_baseComponent_1 = require('./app.baseComponent');
/* */
/* Pages and directives */
var app_landingComponent_1 = require('./landing/app.landingComponent');
var app_registerComponent_1 = require('./auth/app.registerComponent');
var app_headerComponent_1 = require('./shared/app.headerComponent');
/**/
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, ng_bootstrap_1.NgbModule.forRoot(),
                router_1.RouterModule.forRoot([
                    { path: '', component: app_landingComponent_1.landingComponent, data: { 'title': 'MindMax' } },
                    { path: 'base', component: app_baseComponent_1.baseComponent, data: { 'title': 'MindMax' } },
                    { path: 'register', component: app_registerComponent_1.AuthComponent, data: { 'title': 'Login' } }
                ])
            ],
            declarations: [app_baseComponent_1.baseComponent, app_registerComponent_1.AuthComponent, app_headerComponent_1.headerComponent, app_landingComponent_1.landingComponent],
            providers: [http_1.HttpModule],
            bootstrap: [app_baseComponent_1.baseComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map