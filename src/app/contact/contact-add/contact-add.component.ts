import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ContactsService, Contact} from '../../shared';

@Component({
 selector: 'contact-add',
 templateUrl: './contact-add.component.html',
 styleUrls: ['./contact-add.component.css']
})

export class ContactAddComponent implements OnInit {
  private contact: Contact = new Contact(0, '', '', '', []);

 constructor(private contactsService: ContactsService,
 private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit(){
    console.log ('inside ContactAddComponent OnInit');

    };

 addContact(contact){
 console.log('Adding Contact.'  + JSON.stringify(contact));
  this.contactsService.saveContact(contact).subscribe(
    (res: Contact) => {
      this.contact = res;
      this.resetContact();
      this.router.navigate(['contact']);
    }
  );
 }

 private resetContact(){
  this.contact = new Contact(0, '', '', '', []);
 }

}
