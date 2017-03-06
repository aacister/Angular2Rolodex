import { Component, Input } from '@angular/core';
import { Hobby} from '../../shared';

@Component({
 selector: 'hobby-listrow',
 templateUrl: './hobby-listrow.component.html',
 styleUrls: ['./hobby-listrow.component.css']
})

export class HobbyListRowComponent {

 constructor() {}

	@Input() hobby: Hobby;
}
