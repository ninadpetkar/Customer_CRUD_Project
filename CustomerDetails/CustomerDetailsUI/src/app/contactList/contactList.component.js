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
var core_1 = require("@angular/core");
var contact_service_1 = require("../services/contact.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/toPromise");
var ContactList = (function () {
    function ContactList(_contactService, _activatedroute, _router) {
        this._contactService = _contactService;
        this._activatedroute = _activatedroute;
        this._router = _router;
        //contactList: CustomerDetail[];
        this.radioButtonSelectedValue = '1';
    }
    ContactList.prototype.ngOnInit = function () {
        this._contactService.getContacts();
    };
    ContactList.prototype.getTotalContactsCount = function () {
        return this._contactService._contactList.length;
    };
    ContactList.prototype.getTotalActiveContactsCount = function () {
        return this._contactService._contactList.filter(function (f) { return f.IsActive == 1; }).length;
    };
    ContactList.prototype.getTotalDeActiveContactsCount = function () {
        return this._contactService._contactList.filter(function (f) { return f.IsActive == 0; }).length;
    };
    ContactList.prototype.OnRadioButtonChange = function (parameterValue) {
        this.radioButtonSelectedValue = parameterValue;
    };
    ContactList.prototype.addEditContact = function (CustomerId) {
        if (CustomerId === 0) {
            this._contactService.contactInitialization();
            this._router.navigate(['/contactDetails', 0]);
        }
        else {
            this._router.navigate(['/contactDetails', CustomerId]);
        }
    };
    ContactList.prototype.removeContact = function (CustomerId) {
        var removed = false;
        var isConfirmed = window.confirm("Please confirm to delete");
        if (isConfirmed) {
            this._contactService.removeContact(CustomerId);
        }
    };
    return ContactList;
}());
ContactList = __decorate([
    core_1.Component({
        selector: 'contactList',
        templateUrl: 'app/contactList/contactList.component.html',
        styleUrls: ['app/contactList/contactList.component.css']
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService,
        router_1.ActivatedRoute,
        router_1.Router])
], ContactList);
exports.ContactList = ContactList;
//# sourceMappingURL=contactList.component.js.map