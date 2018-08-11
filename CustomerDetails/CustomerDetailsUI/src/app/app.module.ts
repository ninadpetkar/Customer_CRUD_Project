import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import {RouterModule, Routes} from '@angular/router'

import { ShowAll} from './showAll/showAll.component'
import { ContactList } from './contactList/contactList.component'
import { ContactService } from './services/contact.service'
import {AddEditContact} from './addEditContact/addEditContact.component'
import {PageNotFoundComponent} from './PageNotFoundComponent/PageNotFoundComponent.component'

import { AppComponent }  from './app.component';

const appRoutes: Routes = [
  { path: 'contactList', component: ContactList },
  { path: 'contactDetails/:CustomerId', component: AddEditContact },
  { path: '', redirectTo: '/contactList', pathMatch:'full' }
]


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, ContactList, ShowAll, AddEditContact, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ContactService]
})
export class AppModule { }
