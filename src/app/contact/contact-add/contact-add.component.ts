import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import {ContactsService, Contact, Hobby, HobbiesService} from '../../shared';

@Component({
 selector: 'contact-add',
 templateUrl: './contact-add.component.html',
 styleUrls: ['./contact-add.component.css']
})

export class ContactAddComponent implements OnInit {

  private contact: Contact = new Contact(0, '', '', '', []);
  private hobbyList: Observable<Hobby[]>;
  private updatedHobbyList: Hobby[] = [];
  private checkBoxHobbies = [];


 constructor(private contactsService: ContactsService,
 private hobbiesService: HobbiesService,
 private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit(){

    this.hobbyList = this.hobbiesService.hobbies;
    this.hobbyList.subscribe(updatedHobbies => {
      this.updatedHobbyList=updatedHobbies;
      this.checkBoxHobbies=this.hobbiesForCheckBoxes();
    })
    this.hobbiesService.getAllHobbies();
    };

 addContact(contact){
   this.contact = contact;
   this.contact.hobbies = [];
   this.checkBoxHobbies.forEach((hobby) => {
       if(hobby['checked'] === true)
        this.contact.hobbies.push(hobby);
     });

     this.contactsService.createContact(this.contact);

   this.router.navigate(['']);

 }


 private hobbiesForCheckBoxes() {
   return this.updatedHobbyList.map(hobby => {
    hobby['checked'] = false;
    return hobby;
   });
}


}
