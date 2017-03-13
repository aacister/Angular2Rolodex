import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Hobby} from '../../shared';

@Component({
 selector: 'hobby-form',
 templateUrl: './hobby-form.component.html',
 styleUrls: ['./hobby-form.component.css']
})

export class HobbyFormComponent {


 constructor() {}

 ngOnInit(){
 }
	@Input() hobby: Hobby;
  @Output() onHobbySave = new EventEmitter<Hobby>();

  onValueChanged($event){
    if($event.target.placeholder === 'Enter description')
      this.hobby.title = $event.target.value;

  }

  saveHobby(){
    if(this.isHobbyValid())
    {
      this.onHobbySave.emit(this.hobby);
    }
  }

  private isHobbyValid(){
    if(this.hobby.title.length>0)
      return true;
    else
      return false;
  }
}
