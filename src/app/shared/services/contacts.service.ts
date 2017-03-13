import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService} from './api.service';
import { HobbiesService } from './hobbies.service';
import { Contact, Hobby } from '../models';

@Injectable()
export class ContactsService {

  contacts: Observable<Contact[]>;
  private _contacts: BehaviorSubject<Contact[]>;
  private dataStore: { contacts: Contact[] };


  constructor(
    private apiService: ApiService,
    private hobbiesService: HobbiesService
    ) {
    this.dataStore = { contacts: [] };
    this._contacts = new BehaviorSubject([]);
    this.contacts = this._contacts.asObservable();
  }

  getAllContacts() {
    this.apiService.get('/contacts')
      .map(contacts => {
      let result: Array<Contact> = [];
      contacts.forEach((contact) => {
        result.push(new Contact(
          contact._id,
          contact.email,
          contact.first_name,
          contact.last_name,
          contact.hobbies
          ));
      });
      return result;
    })
      .subscribe(data => {
      this.dataStore.contacts = data;

      this._contacts.next(Object.assign({}, this.dataStore).contacts);
    }, error => console.log('Could not load contacts.'));

  }




  deleteContact(id: number | string) {
    this.apiService.delete('/contacts/' + id).subscribe(response => {
      this.dataStore.contacts.forEach((c, i) => {
        if (c.id === id) {
          this.dataStore.contacts.splice(i, 1);
        }
      });

      this._contacts.next(Object.assign({}, this.dataStore).contacts);
    }, error => console.log('Could not delete contact.'));
  }

  createContact(contact: Contact) {
    this.apiService.post('/contacts/', { contact: contact })
      .subscribe(data => {
      this.dataStore.contacts.push(data);
      this._contacts.next(Object.assign({}, this.dataStore).contacts);
    }, error => console.log('Could not create contact.'));
  }

  updateContact(contact: Contact) {
    this.apiService.put('/contacts/' + contact.id, { contact: contact })
      .subscribe(data => {
      this.dataStore.contacts.forEach((c, i) => {
        if (c.id === data._id) {
          this.dataStore.contacts[i] = data;
        }
      });

      this._contacts.next(Object.assign({}, this.dataStore).contacts);
    }, error => console.log('Could not update contact.'));
  }

  addHobby(contactId: string | number, hobby: Hobby) {
    this.apiService.post('/contacts/' + contactId + '/hobbies', { hobby: hobby })
      .map(contact => {
      let result: Contact;
        result =new Contact(
          contact._id,
          contact.email,
          contact.first_name,
          contact.last_name,
          contact.hobbies
          );

      return result;
    })
      .subscribe(data => {
      let notFound = true;
      this.dataStore.contacts.forEach((item, index) =>{
        if(item.id === data.id){
          this.dataStore.contacts[index] = data;
          notFound = false;
        }
      });

      if(notFound){
        this.dataStore.contacts.push(data);
      }

      this._contacts.next(Object.assign({}, this.dataStore).contacts);

    }, error => console.log(error));
  }

}
