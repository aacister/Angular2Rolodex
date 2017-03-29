import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Contact, Hobby} from '../../shared';


@Component({
 selector: 'contact-form',
 templateUrl: './contact-form.component.html',
 styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {


 constructor() {}

 ngOnInit(){
 }
	@Input() contact: Contact;
	@Input() hobbies: Array<any>;
  @Output() onContactSave = new EventEmitter<Contact>();

  onValueChanged($event){
    if($event.target.placeholder === 'Enter first name')
      this.contact.first_name = $event.target.value;
    else if($event.target.placeholder === 'Enter last name')
      this.contact.last_name = $event.target.value;
    else if($event.target.placeholder === 'Enter email')
      this.contact.email = $event.target.value;
  }


  updateContactHobbies(event) {
      let contact = this.contact;
      let hobbyTitle = event.target.value;
      let hobby = this.hobbies.filter(hobby => hobby.title == hobbyTitle)[0];
      let checked = !hobby.checked;
      hobby['checked'] = checked;
      if (checked) {
        contact.hobbies.push(hobby);
      } else {
        let index=-1;
        for(var i = 0; i < contact.hobbies.length; i++) {
          if (contact.hobbies[i].title === hobby.title) {
            index = i;
            break;
          }
        }
        if(index > -1)
          contact.hobbies.splice(index);
      }
      this.contact = contact;


    }

    saveContact(){
    if(this.isContactValid())
    {
      this.onContactSave.emit(this.contact);
    }

  }

  private isContactValid(){
    if(this.contact.email.length>0 && this.contact.first_name.length>0 && this.contact.email.length>0)
      return true;
    else
      return false;
  }


}
