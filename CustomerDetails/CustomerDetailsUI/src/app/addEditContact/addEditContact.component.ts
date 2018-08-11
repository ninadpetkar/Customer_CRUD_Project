import { CustomerDetail } from '../models/CustomerDetail'
import { Component, Output } from '@angular/core'
import { ContactService } from '../services/contact.service'
import { ActivatedRoute, Router } from '@angular/router'
import 'rxjs/add/operator/toPromise'
import { NgForm } from '@angular/forms';
import { Observable } from '../../../node_modules/rxjs/Observable';

@Component({
    selector: 'AddEditContact',
    templateUrl: 'app/addEditContact/addEditContact.component.html',
    styleUrls: ['app/addEditContact/addEditContact.component.css']
})


export class AddEditContact {
    isLoaded: boolean = false;
    contactModel: CustomerDetail;
    contactId: number = 0;
    constructor(private _contactService: ContactService,
        private _activatedroute: ActivatedRoute,
        private _router: Router
    ) {
         //this._contactService.contactInitialization();
    }

    ngOnInit() {
        this._activatedroute.paramMap.subscribe(paramMap => {
            this.contactId = +paramMap.get('CustomerId');
            this.getContactDetails(this.contactId);
            this.contactModel = Object.assign({}, this._contactService._contact);
        });
    }

    getContactDetails(contactId: number) {
        
        // if (contactId == 0) {
        //     this.contactModel = this._contactService.contactInitialization();
        //     this.isLoaded = true;
        // }
        // else {
            //this.contactModel = 
            this._contactService.getContactById(contactId);
            //this.isLoaded = true;
        //}
    }
    saveContact(newcontactModel: CustomerDetail) {
        if (newcontactModel.CustomerId == 0 || newcontactModel.CustomerId == null) {
            //Save
            this._contactService.saveContact(newcontactModel);
        }
        else {
            //update
            let updatedContact = Object.assign({},newcontactModel);
            this._contactService.editContact(updatedContact);
        }
        this._router.navigate(['contactList']);
    }
}