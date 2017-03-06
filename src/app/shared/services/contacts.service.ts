import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService} from './api.service';
import { HobbiesService } from './hobbies.service';
import { Contact, Hobby } from '../models';

@Injectable()
export class ContactsService {
  constructor (
    private apiService: ApiService,
    private hobbiesService: HobbiesService
  ) {}



  getAllContacts(): Observable<Array<Contact>>{
    return this.apiService.get('/contacts')
    .map((contacts: Array<any>) => {
      let result:Array<Contact> = [];
      if (contacts) {
        contacts.forEach((contact) => {
        console.log('Inside getAllContacts. Current Contact to push to Contact object. ' + JSON.stringify(contact));
          result.push(
                     new Contact(
                              contact._id,
                              contact.email,
                              contact.first_name,
                              contact.last_name,
                              this.populateHobbies(contact.hobbies)));
        });
      }
      return result;
    });

  }

  getContact(id): Observable<Contact> {
    return this.apiService.get('/contacts/' + id)
    .map((contact: any) =>
    {
     if(contact)
     {
       return new Contact(
                         contact._id,
                         contact.email,
                         contact.first_name,
                         contact.last_name,
                         this.populateHobbies(contact.hobbies));
     }
     else
     {
      return null;
     }
  });

  }

  deleteContact(id) {
    return this.apiService.delete('/contacts/' + id);
  }

  saveContact(contact): Observable<Contact> {
    if (contact.id != 0) {
      console.log('Editing');
      return this.apiService.put('/contacts/' + contact.id, {contact: contact})
             .map((contact: any) => {
             if(contact)
             {
               return new Contact(
                                 contact._id,
                                 contact.email,
                                 contact.first_name,
                                 contact.last_name,
                                 this.populateHobbies(contact.hobbies));
             }
             else
             {
              return null;
             }
             });

    } else {
      console.log('Adding');
      return this.apiService.post('/contacts/', {contact: contact})
             .map((contact: any) =>
             {
             if(contact)
             {
               return new Contact(contact._id,
                                contact.email,
                                 contact.first_name,
                                 contact.last_name,
                                 this.populateHobbies(contact.hobbies));
             }
             else
             {
              return null;
             }
             });
    }
  }

  addHobby(contactId, hobby): Observable<Contact> {
    console.log('Adding hobby in service:' + JSON.stringify(hobby));

    return this.apiService.post('/contacts/' + contactId + '/hobbies', {"hobby": hobby})
      .map((contact: any) =>
      {
        if(contact)
        {
          return new Contact(contact._id,
                              contact.first_name,
                              contact.last_name,
                              contact.email,
                              this.populateHobbies(contact.hobbies));
        }
        else{
          return null;
        }
      });

  }

  private populateHobbies(hobbies: Array<any>){
    console.log('Populating Hobbies: ' + JSON.stringify(hobbies));
    let hobbyArray: Array<Hobby> = new Array<Hobby>();
    hobbies.map((item, index) => {
      console.log('Getting hobby' + JSON.stringify(item));
      this.hobbiesService.getHobby(item._id).subscribe(
      (hobby: Hobby) => {
        hobbyArray.push(hobby);
      });
    });
    return hobbyArray;
  }

}
