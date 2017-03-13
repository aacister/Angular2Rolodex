import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {Hobby, HobbiesService} from '../../shared';


@Component({
	selector: 'hobby-list',
	templateUrl: './hobby-list.component.html',
  styleUrls: ['./hobby-list.component.css']
})

export class HobbyListComponent implements OnInit{
 private hobbyList: Observable<Hobby[]>;
 private currentHobby: Hobby;

	constructor(
		private hobbiesService: HobbiesService
	) {}

	ngOnInit(){

		this.hobbyList = this.hobbiesService.hobbies;
		this.hobbiesService.getAllHobbies();

	}

}
