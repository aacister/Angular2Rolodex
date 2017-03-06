import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {HobbiesService, Hobby} from '../../shared';

@Component({
 selector: 'hobby-add',
 templateUrl: './hobby-add.component.html',
 styleUrls: ['./hobby-add.component.css']
})

export class HobbyAddComponent {
 private hobby: Hobby = new Hobby(0, '');

 constructor(private hobbiesService: HobbiesService,
 private route: ActivatedRoute,
    private router: Router) {}

 addHobby(hobby){
 console.log('Adding Hobby.'  + JSON.stringify(hobby));
/*  this.hobbiesService.saveHobby(hobby).subscribe(
    (res: Hobby) => {
      console.log('Hobby response:' + JSON.stringify(res) );
      this.resetHobby();
      this.router.navigate(['hobbies']);
    }
  ); */
 }


 private resetHobby(){
  this.hobby = new Hobby(0, '');
 }

}
