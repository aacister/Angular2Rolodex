import {Component, OnInit} from '@angular/core';
import {Contact, ContactsService} from '../../shared';


@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit{
 private contactList: Contact[];
 private currentContact: Contact;

	constructor(
		private contactsService: ContactsService
	) {}

	ngOnInit() {
		this.contactsService.getAllContacts().subscribe(
		(contacts: Contact[]) => {
			this.contactList = contacts;
		}
		);

	}

	contactSelected(contact){
		this.currentContact = contact;
	}

	isSelected(contact): boolean {
		if(!this.currentContact){
			return false;
		}
		return this.currentContact.id === contact.id ? true: false;
	}

}
