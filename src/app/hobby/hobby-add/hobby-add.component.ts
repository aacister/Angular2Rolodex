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
    private router: Router) { }

  addHobby(hobby) {
    this.hobbiesService.createHobby(hobby);
    this.resetHobby();
    this.router.navigate(['hobby']);

  }

  private resetHobby() {
    this.hobby = new Hobby(0, '');
  }

}
