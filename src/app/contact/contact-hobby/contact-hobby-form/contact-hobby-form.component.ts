import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Contact, Hobby, HobbiesService} from '../../../shared';

@Component({
 selector: 'contact-hobby-form',
 templateUrl: './contact-hobby-form.component.html',
 styleUrls: ['./contact-hobby-form.component.css']
})

export class ContactHobbyFormComponent implements OnInit{
 hobbyList: Hobby[];

 constructor(private hobbiesService: HobbiesService) {}

 ngOnInit(){

   this.hobbiesService.getAllHobbies().subscribe(
   (hobbies: Hobby[]) => {
     this.hobbyList = hobbies;

   }
   );
 }
	@Input() hobby: Hobby;
  @Output() onSave : EventEmitter<any> = new EventEmitter();

  onValueChanged(hobby){
    if(hobby){
        this.hobby = hobby;
      }

      alert(JSON.stringify(this.hobby));
  }

  saveHobby(){

    if(this.isHobbyValid())
    {
      console.log('Is valid');
      console.log('Hobby to save: ' + JSON.stringify(this.hobby));
      this.onSave.emit(this.hobby);
    }
    else
      console.log('Is not valid');
  }

  private isHobbyValid(){
    console.log('Validating: ' + JSON.stringify(this.hobby));
    if(this.hobby.title.length > 0)
      return true;
    else
      return false;
  }
}
