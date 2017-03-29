import { Component, Input, OnInit, OnChanges, SimpleChange} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import {Contact, Hobby, ContactsService} from '../../../shared';
@Component({
  selector: 'contact-hobby-list',
  templateUrl: './contact-hobby-list.component.html',
  styleUrls: ['./contact-hobby-list.component.css']
})
export class ContactHobbyListComponent implements OnChanges {

  private contactList: Observable<Contact[]>;

  @Input() contact: Contact;
  @Input() hobbies: Hobby[];

  constructor(private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.contactList = this.contactsService.contacts;
    this.contactList.subscribe(contacts => {

      let filteredContactList = contacts.filter(contact => contact._id === this.contact._id);
      if(filteredContactList.length>0){
        this.contact = filteredContactList[0];
        this.hobbies = this.contact.hobbies;
      }
    });
    this.contactsService.getAllContacts();
  }


  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    this.hobbies = this.contact.hobbies;
  }

}
