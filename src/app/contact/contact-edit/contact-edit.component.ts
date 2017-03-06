import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Contact, ContactsService} from '../../shared';

@Component({
 selector: 'contact-edit',
 templateUrl: './contact-edit.component.html',
 styleUrls: ['./contact-edit.component.css']
})

export class ContactEditComponent implements OnInit{
 private contact: Contact = new Contact(0,'', '', '', []);

 constructor(private contactsService: ContactsService,
              private route: ActivatedRoute,
              private router: Router) {}

 ngOnInit(){
  this.route.data.subscribe(
    (data: {contact: Contact}) => {
    if(data.contact){
      this.contact = data.contact;
      }

    }
  );
 }


 editContact(contact){
 console.log('Editing contact: ' + JSON.stringify(contact));
  this.contactsService.saveContact(contact).subscribe(
    (res: Contact) => {
      this.router.navigateByUrl('/');
    }
  );
 }

}
