"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var showAll_component_1 = require("./showAll/showAll.component");
var contactList_component_1 = require("./contactList/contactList.component");
var contact_service_1 = require("./services/contact.service");
var addEditContact_component_1 = require("./addEditContact/addEditContact.component");
var PageNotFoundComponent_component_1 = require("./PageNotFoundComponent/PageNotFoundComponent.component");
var app_component_1 = require("./app.component");
var appRoutes = [
    { path: 'contactList', component: contactList_component_1.ContactList },
    { path: 'contactDetails/:CustomerId', component: addEditContact_component_1.AddEditContact },
    { path: '', redirectTo: '/contactList', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, contactList_component_1.ContactList, showAll_component_1.ShowAll, addEditContact_component_1.AddEditContact, PageNotFoundComponent_component_1.PageNotFoundComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [contact_service_1.ContactService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map