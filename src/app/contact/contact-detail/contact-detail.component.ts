import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';


import {Contact, ContactsService} from '../../shared';


@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})

export class ContactDetailComponent {
  private contactList: Observable<Contact[]>;
  private contactId: string | number;;
  private updatedContactList: Contact[] = [];
  private contact: Contact;
  canAdd: boolean = true;

  constructor(private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {


    this.route.params.subscribe(params => {
      this.contactId = params['id'];
      this.canAdd = true;

      this.contactList=this.contactsService.contacts;
      this.contactList.subscribe(updatedContacts => {
        let filteredContactList = updatedContacts.filter(contact => contact._id === this.contactId);
        this.contact = filteredContactList[0];
      })
    });

  }

  deleteContact(contact) {
    this.contactsService.deleteContact(contact._id);
    this.router.navigate(['']);
  }

  addClick(event) {
    this.canAdd = false;
  }

  cancelClick(event) {
    this.canAdd = true;
  }


}
