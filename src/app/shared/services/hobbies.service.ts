import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import {BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Hobby } from '../models';


@Injectable()
export class HobbiesService {
  hobbies: Observable<Hobby[]>;
  private _hobbies: BehaviorSubject<Hobby[]>;
  private dataStore: { hobbies: Hobby[] };

  constructor(
    private apiService: ApiService,
    ) {
    this.dataStore = { hobbies: [] };
    this._hobbies = new BehaviorSubject([]);
    this.hobbies = this._hobbies.asObservable();

  }

  getAllHobbies() {
    this.apiService.get('/hobbies')
      .subscribe(data => {
      console.log('data: ' + JSON.stringify(data));
      this.dataStore.hobbies = data;

      this._hobbies.next(Object.assign({}, this.dataStore).hobbies);
    }, error => console.log('Could not load hobbies.'));

  }

  getHobby(id): Observable<Hobby> {
    return this.apiService.get('/hobbies/' + id)
    .map((hobby: any) =>
    {
      if(hobby)
        return new Hobby(hobby._id, hobby.title);
      else
        return null;
    });
  }

  createHobby(hobby: Hobby) {
    this.apiService.post('/hobbies/', { hobby: hobby })
      .subscribe(data => {
      this.dataStore.hobbies.push(data);
      this._hobbies.next(Object.assign({}, this.dataStore).hobbies);
    }, error => console.log('Could not create hobby.'));
  }




}
