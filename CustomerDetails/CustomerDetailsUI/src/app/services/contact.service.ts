import { CustomerDetail } from '../models/CustomerDetail';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { Obsevable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { error } from '../../../node_modules/@types/selenium-webdriver';

@Injectable()
export class ContactService {
    private baseUrl = 'http://localhost:49848/api/customerdetails'
    public isLoaded: boolean = false;
    public _contactList: CustomerDetail[];
    public _contact: CustomerDetail;
    public statusMessage = 'Loading data. Please wait...'

    constructor(private _http: Http) {
        this.contactInitialization();
        this._contactList = [];
    }

    public getContacts(): CustomerDetail[] {
        if (this._contactList.length === 0) {
            this.getContactsFromAPI()
                .delay(2000)
                .toPromise()
                .then(fetchedList => {
                    this._contactList = fetchedList;
                    if (this._contactList.length === 0) {
                        this.statusMessage = "No records found.";
                    }
                    this.isLoaded = true;
                });
        } else {
            this._contactList = this._contactList;
        }
        return this._contactList;
    }

    public getContactById(CustomerId: number) {
        if (this._contactList.length === 0) {
            if (CustomerId !== 0) {
                this.getContactByIdFromAPI(CustomerId)
                    .toPromise()
                    .then(fetchedContact => {
                        this._contact = fetchedContact;
                        this.isLoaded = true;
                    });
            }
        } else if (this._contactList.length > 0) {
            let index = this._contactList.findIndex(f => f.CustomerId == CustomerId);
            if (index !== -1) {
                this._contact = this._contactList.find(f => f.CustomerId == CustomerId);
                this.isLoaded = true;
            } else {
                this.contactInitialization();
            }
        }
    }

    saveContact(newContact: CustomerDetail): CustomerDetail {
        this._http.post(this.baseUrl, newContact, { headers: new Headers({ 'Content-Type': 'application/json' }) })
            .map((res: Response) => <CustomerDetail>res.json())
            .toPromise()
            .then(savedContact => {
                this._contact = savedContact;
                this._contactList.push(savedContact)
            })
            .catch(this.handleError);

        return this._contact;
    }

    editContact(newContact: CustomerDetail) {
        this._http.put(`${this.baseUrl}/${newContact.CustomerId}`, newContact, { headers: new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' }) })
            .map((res: Response) => <CustomerDetail>res.json())
            .toPromise()
            .then(() => {
                this._contact = newContact;
                let index = this._contactList.findIndex(c => c.CustomerId === this._contact.CustomerId);
                this._contactList[index] = this._contact;
            })
            .catch(this.handleError);
    }

    removeContact(CustomerId: number) {
        this.removeContactAPI(CustomerId)
            .toPromise()
            .then(deletedContact => {
                let index = this._contactList.findIndex(c => c.CustomerId === CustomerId);
                if (index !== -1)
                    this._contactList[index].IsActive = 0;
            })
            .catch(this.handleError);
    }

    handleError(err: Response) {
        this.statusMessage = 'Problem with service ...';
        console.log('Problem with service. Please make sure your service is up and running')
        return Observable.throw(err);
    }

    public contactInitialization() {
        let c: CustomerDetail =
        {
            CustomerId: 0,
            FirstName: '',
            LastName: '',
            Email: '',
            PhoneNumber: 0,
            IsActive: 1
        }
        this._contact = c;
        //this.isLoaded = true;
    }

    //API Calls
    private getContactsFromAPI(): Observable<CustomerDetail[]> {
        return this._http.get(this.baseUrl)
            .map((response: Response) => <CustomerDetail[]>response.json())
            .catch(this.handleError);
    }

    private getContactByIdFromAPI(CustomerId: number): Observable<CustomerDetail> {
        return this._http.get(`${this.baseUrl}/${CustomerId}`)
            .map((res: Response) => <CustomerDetail>res.json())
            .catch(this.handleError);

    }

    private removeContactAPI(CustomerId: number): Observable<CustomerDetail> {
        return this._http.delete(`${this.baseUrl}/${CustomerId}`)
            .map((res: Response) => <CustomerDetail>res.json())
            .catch(this.handleError);

    }
}