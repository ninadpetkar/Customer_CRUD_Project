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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
//import { Obsevable } from 'rxjs/Rx';
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/Observable/throw");
require("rxjs/add/observable/of");
require("rxjs/add/operator/delay");
var ContactService = (function () {
    function ContactService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:49848/api/customerdetails';
        this.isLoaded = false;
        this.statusMessage = 'Loading data. Please wait...';
        this.contactInitialization();
        this._contactList = [];
    }
    ContactService.prototype.getContacts = function () {
        var _this = this;
        if (this._contactList.length === 0) {
            this.getContactsFromAPI()
                .delay(2000)
                .toPromise()
                .then(function (fetchedList) {
                _this._contactList = fetchedList;
                if (_this._contactList.length === 0) {
                    _this.statusMessage = "No records found.";
                }
                _this.isLoaded = true;
            });
        }
        else {
            this._contactList = this._contactList;
        }
        return this._contactList;
    };
    ContactService.prototype.getContactById = function (CustomerId) {
        var _this = this;
        if (this._contactList.length === 0) {
            if (CustomerId !== 0) {
                this.getContactByIdFromAPI(CustomerId)
                    .toPromise()
                    .then(function (fetchedContact) {
                    _this._contact = fetchedContact;
                    _this.isLoaded = true;
                });
            }
        }
        else if (this._contactList.length > 0) {
            var index = this._contactList.findIndex(function (f) { return f.CustomerId == CustomerId; });
            if (index !== -1) {
                this._contact = this._contactList.find(function (f) { return f.CustomerId == CustomerId; });
                this.isLoaded = true;
            }
            else {
                this.contactInitialization();
            }
        }
    };
    ContactService.prototype.saveContact = function (newContact) {
        var _this = this;
        this._http.post(this.baseUrl, newContact, { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) })
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function (savedContact) {
            _this._contact = savedContact;
            _this._contactList.push(savedContact);
        })
            .catch(this.handleError);
        return this._contact;
    };
    ContactService.prototype.editContact = function (newContact) {
        var _this = this;
        this._http.put(this.baseUrl + "/" + newContact.CustomerId, newContact, { headers: new http_1.Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' }) })
            .map(function (res) { return res.json(); })
            .toPromise()
            .then(function () {
            _this._contact = newContact;
            var index = _this._contactList.findIndex(function (c) { return c.CustomerId === _this._contact.CustomerId; });
            _this._contactList[index] = _this._contact;
        })
            .catch(this.handleError);
    };
    ContactService.prototype.removeContact = function (CustomerId) {
        var _this = this;
        this.removeContactAPI(CustomerId)
            .toPromise()
            .then(function (deletedContact) {
            var index = _this._contactList.findIndex(function (c) { return c.CustomerId === CustomerId; });
            if (index !== -1)
                _this._contactList[index].IsActive = 0;
        })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (err) {
        this.statusMessage = 'Problem with service ...';
        console.log('Problem with service. Please make sure your service is up and running');
        return Observable_1.Observable.throw(err);
    };
    ContactService.prototype.contactInitialization = function () {
        var c = {
            CustomerId: 0,
            FirstName: '',
            LastName: '',
            Email: '',
            PhoneNumber: 0,
            IsActive: 1
        };
        this._contact = c;
        //this.isLoaded = true;
    };
    //API Calls
    ContactService.prototype.getContactsFromAPI = function () {
        return this._http.get(this.baseUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.getContactByIdFromAPI = function (CustomerId) {
        return this._http.get(this.baseUrl + "/" + CustomerId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ContactService.prototype.removeContactAPI = function (CustomerId) {
        return this._http.delete(this.baseUrl + "/" + CustomerId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return ContactService;
}());
ContactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map