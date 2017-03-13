import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';

import {Contact, ContactsService} from '../../shared';

@Component({
 selector: 'contact-edit',
 templateUrl: './contact-edit.component.html',
 styleUrls: ['./contact-edit.component.css']
})

export class ContactEditComponent implements OnInit{
 private contact: Contact;
 private contactList: Observable<Contact[]>;
 private contactId: string | number;;
 private updatedContactList: Contact[] = [];

 constructor(private contactsService: ContactsService,
              private route: ActivatedRoute,
              private router: Router) {}

 ngOnInit(){
    this.route.params.subscribe(params => {
         this.contactId = params['id'];
    });

    this.contactList = this.contactsService.contacts;
    this.contactsService.contacts.subscribe(updatedContacts => {
      this.updatedContactList = updatedContacts;
      let filteredContactList = updatedContacts.filter(contact => contact.id === this.contactId);
      this.contact = filteredContactList[0];
    });
    this.contactsService.getAllContacts();

 }


 editContact(contact){
  this.contactsService.updateContact(contact);
  this.router.navigate(['contact']);
 }

}
