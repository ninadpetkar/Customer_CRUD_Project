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
var AddEditContact = (function () {
    function AddEditContact(_contactService, _activatedroute, _router) {
        this._contactService = _contactService;
        this._activatedroute = _activatedroute;
        this._router = _router;
        this.isLoaded = false;
        this.contactId = 0;
        //this._contactService.contactInitialization();
    }
    AddEditContact.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedroute.paramMap.subscribe(function (paramMap) {
            _this.contactId = +paramMap.get('CustomerId');
            _this.getContactDetails(_this.contactId);
            _this.contactModel = Object.assign({}, _this._contactService._contact);
        });
    };
    AddEditContact.prototype.getContactDetails = function (contactId) {
        // if (contactId == 0) {
        //     this.contactModel = this._contactService.contactInitialization();
        //     this.isLoaded = true;
        // }
        // else {
        //this.contactModel = 
        this._contactService.getContactById(contactId);
        //this.isLoaded = true;
        //}
    };
    AddEditContact.prototype.saveContact = function (newcontactModel) {
        if (newcontactModel.CustomerId == 0 || newcontactModel.CustomerId == null) {
            //Save
            this._contactService.saveContact(newcontactModel);
        }
        else {
            //update
            var updatedContact = Object.assign({}, newcontactModel);
            this._contactService.editContact(updatedContact);
        }
        this._router.navigate(['contactList']);
    };
    return AddEditContact;
}());
AddEditContact = __decorate([
    core_1.Component({
        selector: 'AddEditContact',
        templateUrl: 'app/addEditContact/addEditContact.component.html',
        styleUrls: ['app/addEditContact/addEditContact.component.css']
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService,
        router_1.ActivatedRoute,
        router_1.Router])
], AddEditContact);
exports.AddEditContact = AddEditContact;
//# sourceMappingURL=addEditContact.component.js.map