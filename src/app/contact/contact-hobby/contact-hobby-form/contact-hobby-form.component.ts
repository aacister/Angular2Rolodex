import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {Contact, Hobby, HobbiesService} from '../../../shared';

@Component({
  selector: 'contact-hobby-form',
  templateUrl: './contact-hobby-form.component.html',
  styleUrls: ['./contact-hobby-form.component.css']
})

export class ContactHobbyFormComponent implements OnInit {
  //hobbyList: Hobby[];
  private hobbyList: Observable<Hobby[]>;
  constructor(private hobbiesService: HobbiesService) { }

  ngOnInit() {
    this.hobbyList = this.hobbiesService.hobbies;
    this.hobbiesService.getAllHobbies();
    /*
     this.hobbiesService.getAllHobbies().subscribe(
     (hobbies: Hobby[]) => {
       this.hobbyList = hobbies;

     }
     );
    */
  }
  @Input() hobby: Hobby;
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  onValueChanged(hobby) {
    if (hobby) {
      this.hobby = hobby;
    }
  }

  saveHobby() {

    if (this.isHobbyValid()) {
      this.onSave.emit(this.hobby);
    }

  }

  private isHobbyValid() {
    if (this.hobby.title.length > 0)
      return true;
    else
      return false;
  }
}
