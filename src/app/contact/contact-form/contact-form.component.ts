import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Contact} from '../../shared';

@Component({
 selector: 'contact-form',
 templateUrl: './contact-form.component.html',
 styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {


 constructor() {}

 ngOnInit(){
  console.log('Contact in form: ' + JSON.stringify(this.contact));
 }
	@Input() contact: Contact;
  @Output() onContactSave = new EventEmitter<Contact>();

  onValueChanged($event){
    if($event.target.placeholder === 'Enter first name')
      this.contact.first_name = $event.target.value;
    else if($event.target.placeholder === 'Enter last name')
      this.contact.last_name = $event.target.value;
    else if($event.target.placeholder === 'Enter email')
      this.contact.email = $event.target.value;
  }

  saveContact(){
    console.log('Saving contact');
    if(this.isContactValid())
    {
      console.log('Is valid');
      this.onContactSave.emit(this.contact);
    }
    else
      console.log('Is not valid');
  }

  private isContactValid(){
    console.log('Validating: ' + JSON.stringify(this.contact));
    if(this.contact.email.length>0 && this.contact.first_name.length>0 && this.contact.email.length>0)
      return true;
    else
      return false;
  }
}
