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

    };

 addContact(contact){
   this.contactsService.createContact(contact);
   this.resetContact();
   this.router.navigate(['contact']);

 }

 private resetContact(){
  this.contact = new Contact(0, '', '', '', []);
 }

}
