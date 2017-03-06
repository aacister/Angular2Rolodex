import { Component, Input } from '@angular/core';
import { Contact} from '../../shared';

@Component({
 selector: 'contact-listrow',
 templateUrl: './contact-listrow.component.html',
 styleUrls: ['./contact-listrow.component.css']
})

export class ContactListRowComponent {

 constructor() {}

	@Input() contact: Contact;
}
