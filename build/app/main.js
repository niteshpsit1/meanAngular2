"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_module_1 = require('./app.module');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule, [http_1.HttpModule, forms_1.FormsModule]); // Bootstrap HttpModule, FormsModule
//# sourceMappingURL=main.js.map