import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {ContactsService, Contact, Hobby} from '../../../shared';

@Component({
  selector: 'contact-hobby-add',
  templateUrl: './contact-hobby-add.component.html',
  styleUrls: ['./contact-hobby-add.component.css']
})

export class ContactHobbyAddComponent implements OnInit {
  private contact: Contact = new Contact(0, '', '', '', []);
  private hobby: Hobby = new Hobby(0, '');
  private contactId: string | number = 0;

  constructor(private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router) {
    this.contactId = route.snapshot.parent.params['id'];
  }

  ngOnInit() {

  }


  addHobby(hobby) {
    this.contactsService.addHobby(this.contactId, hobby);
    this.router.navigate(['contact', this.contactId]);
  }


}
