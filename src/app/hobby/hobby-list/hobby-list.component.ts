import {Component, OnInit} from '@angular/core';
import {Hobby, HobbiesService} from '../../shared';


@Component({
	selector: 'hobby-list',
	templateUrl: './hobby-list.component.html',
  styleUrls: ['./hobby-list.component.css']
})

export class HobbyListComponent implements OnInit{
 private hobbyList: Hobby[];
 private currentHobby: Hobby;

	constructor(
		private hobbiesService: HobbiesService
	) {}

	ngOnInit() {
		this.hobbiesService.getAllHobbies().subscribe(
		(hobbies: Hobby[]) => {
			this.hobbyList = hobbies;
		}
		);

	}

	hobbySelected(hobby){
		this.currentHobby = hobby;
	}

	isSelected(hobby): boolean {
		if(!this.currentHobby){
			return false;
		}
		return this.currentHobby.id === hobby.id ? true: false;
	}

}
