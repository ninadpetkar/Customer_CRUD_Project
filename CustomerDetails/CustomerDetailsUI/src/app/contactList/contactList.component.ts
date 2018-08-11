import { CustomerDetail } from '../models/CustomerDetail'
import { Component, Output } from '@angular/core'
import { ContactService } from '../services/contact.service'
import { ActivatedRoute, Router } from '@angular/router'
import 'rxjs/add/operator/toPromise'

@Component({
    selector: 'contactList',
    templateUrl: 'app/contactList/contactList.component.html',
    styleUrls: ['app/contactList/contactList.component.css']
})


export class ContactList {
    //contactList: CustomerDetail[];
    radioButtonSelectedValue: string = '1';

    constructor(private _contactService: ContactService,
        private _activatedroute: ActivatedRoute,
        private _router: Router
    ) {
    }

    ngOnInit() {
        this._contactService.getContacts();
    }

    getTotalContactsCount(): number {
        return this._contactService._contactList.length;
    }

    getTotalActiveContactsCount(): number {
        return this._contactService._contactList.filter(f => f.IsActive == 1).length;

    }

    getTotalDeActiveContactsCount(): number {
        return this._contactService._contactList.filter(f => f.IsActive == 0).length;
    }

    OnRadioButtonChange(parameterValue: string): void {
        this.radioButtonSelectedValue = parameterValue;
    }

    addEditContact(CustomerId: number) {
        if (CustomerId === 0) {
            this._contactService.contactInitialization();
            this._router.navigate(['/contactDetails', 0])
        }
        else {
            this._router.navigate(['/contactDetails', CustomerId]);
        }
    }

    removeContact(CustomerId: number) {
        let removed = false;
        let isConfirmed = window.confirm("Please confirm to delete");
        if (isConfirmed) {
           this._contactService.removeContact(CustomerId);
        }
    }

}