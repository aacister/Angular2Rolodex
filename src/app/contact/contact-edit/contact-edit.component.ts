import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';

import {Contact, ContactsService, Hobby, HobbiesService} from '../../shared';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})

export class ContactEditComponent implements OnInit {
  private contact: Contact;
  private contactList: Observable<Contact[]>;
  private contactId: string | number;;
  private updatedContactList: Contact[] = [];

  private hobbyList: Observable<Hobby[]>;
  private updatedHobbyList: Hobby[] = [];
  private checkBoxHobbies = [];

  constructor(private contactsService: ContactsService,
    private hobbiesService: HobbiesService,
    private route: ActivatedRoute,
    private router: Router) {
    route.params.subscribe(params => {
      this.contactId = params['id'];
    });
  }

  ngOnInit() {

    this.contactList = this.contactsService.contacts;
    this.contactList.subscribe(updatedContacts => {
      this.updatedContactList = updatedContacts;
      let filteredContactList = updatedContacts.filter(contact => contact._id === this.contactId);
      this.contact = filteredContactList[0];
      this.checkBoxHobbies=this.hobbiesForCheckBoxes();

    });
    this.contactsService.getAllContacts();

    this.hobbyList = this.hobbiesService.hobbies;
    this.hobbyList.subscribe(updatedHobbies => {
      this.updatedHobbyList=updatedHobbies;
      this.checkBoxHobbies=this.hobbiesForCheckBoxes();
    })
    this.hobbiesService.getAllHobbies();

  }

  private hobbiesForCheckBoxes() {
    return this.updatedHobbyList.map(hobby => {
      if(this.contact){
        let filteredContactHobbies = this.contact.hobbies.filter(contactHobby => contactHobby.title === hobby.title);
        if (filteredContactHobbies.length > 0) {
          hobby['checked'] = true;
        } else {
          hobby['checked'] = false;
        }
        return hobby;
      }

    });
}

  editContact(contact) {
    this.contact = contact;
    this.contactsService.updateContact(this.contact);
    this.router.navigate(['contact']);
  }

}
