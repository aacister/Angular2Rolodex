import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Contact, ContactsService} from '../../shared';


@Component({
 selector: 'contact-detail',
 templateUrl: './contact-detail.component.html',
 styleUrls: ['./contact-detail.component.css']
})

export class ContactDetailComponent  {

  contact: Contact = new Contact(0, '', '', '', []);

 constructor(private contactsService: ContactsService,
 private route: ActivatedRoute,
    private router: Router) {}

 ngOnInit() {
    // Retrieve the prefetched contact
    this.route.data.subscribe(
      (data: { contact: Contact }) => {
        this.contact = data.contact;
      }
    );
  }


 deleteContact()
 {
  console.log('Deleting contact: ' + this.contact.id);
   this.contactsService.deleteContact(this.contact.id).subscribe(
     () => {
       this.router.navigate(['contact']);
     }
   );
 }

}
