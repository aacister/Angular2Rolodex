import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';


import {Contact, ContactsService} from '../../shared';


@Component({
 selector: 'contact-detail',
 templateUrl: './contact-detail.component.html',
 styleUrls: ['./contact-detail.component.css']
})

export class ContactDetailComponent  {
  private contactList: Observable<Contact[]>;
  private contactId: string | number;;
  private updatedContactList: Contact[] = [];
  private contact: Contact;

 constructor(private contactsService: ContactsService,
 private route: ActivatedRoute,
    private router: Router) {

    }

 ngOnInit() {

 this.route.params.subscribe(params => {
      this.contactId = params['id'];

      //if an update, filter list by new id and assign to this.contact
      if(this.updatedContactList.length > 0){
        let filteredContactList = this.updatedContactList.filter(contact => contact.id === this.contactId);
        this.contact = filteredContactList[0];
      }

    });

   this.contactList = this.contactsService.contacts;
   this.contactsService.contacts.subscribe(updatedContacts => {
     this.updatedContactList = updatedContacts;
     let filteredContactList = updatedContacts.filter(contact => contact.id === this.contactId);
     this.contact = filteredContactList[0];
   });
   this.contactsService.getAllContacts();

  }

 deleteContact(contact)
 {
    this.contactsService.deleteContact(contact.id);
    this.router.navigate(['contact']);

 }

}
