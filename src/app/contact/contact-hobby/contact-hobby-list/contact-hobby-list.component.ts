import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Contact, Hobby, ContactsService} from '../../../shared';
@Component({
  selector: 'contact-hobby-list',
  templateUrl: './contact-hobby-list.component.html',
  styleUrls: ['./contact-hobby-list.component.css']
})
export class ContactHobbyListComponent implements OnInit {

  hobbies: Array<Hobby>;

  @Input() contact: Contact;

  constructor(private contactsService: ContactsService,
  private route: ActivatedRoute,
     private router: Router) { }

     ngOnInit() {

        this.route.data.subscribe(
          (data: { contact: Contact }) => {
            this.hobbies = this.contact.hobbies;
          }
        );
      }

}
