import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hobby-home',
  templateUrl: './hobby-home.component.html',
  styleUrls: ['./hobby-home.component.css']
})
export class HobbyHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Entering Hobby Home.');
  }

}
