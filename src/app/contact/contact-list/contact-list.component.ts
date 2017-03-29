import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {Contact, ContactsService} from '../../shared';


@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit{
 private contactList: Observable<Contact[]>;
 private updatedContactList: Contact[] = [];

	constructor(
		private contactsService: ContactsService
	) {

	}

	ngOnInit() {

		this.contactList = this.contactsService.contacts;
		this.contactList.subscribe(updatedContacts => {
			this.updatedContactList = updatedContacts;
		})
		this.contactsService.getAllContacts();


	}



}
