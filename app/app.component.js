"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var github_service_1 = require("./services/github.service");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\t\t<nav class=\"navbar navbar-default\">\n\t      <div class=\"container\">\n\t        <div class=\"navbar-header\">\n\t          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n\t            <span class=\"sr-only\">Toggle navigation</span>\n\t            <span class=\"icon-bar\"></span>\n\t            <span class=\"icon-bar\"></span>\n\t            <span class=\"icon-bar\"></span>\n\t          </button>\n\t          <a class=\"navbar-brand\" href=\"#\">GithubSearch</a>\n\t        </div>\n\t        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n\t          <ul class=\"nav navbar-nav\">\n\t           \n\t          </ul>\n\t        </div><!--/.nav-collapse -->\n\t      </div>\n\t    </nav>\n\t\t<div class=\"container\"><profile></profile></div>",
        providers: [github_service_1.GithubService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map