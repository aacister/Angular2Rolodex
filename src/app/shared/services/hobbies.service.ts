import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Hobby } from '../models';

@Injectable()
export class HobbiesService {
  constructor (
    private apiService: ApiService
  ) {}

  getAllHobbies(): Observable<Hobby[]>{
    return this.apiService.get('/hobbies')
      .map((hobbies: Array<any>) => {
        let result:Array<Hobby> = [];
        if (hobbies) {
          hobbies.forEach((hobby) => {
            result.push(
                       new Hobby(
                                hobby._id,
                                hobby.title,
                                ));
          });
        }
        return result;
      });
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

  deleteHobby(id) {
    return this.apiService.delete('/hobbies/' + id);
  }

  saveHobby(hobby): Observable<Hobby> {
      return this.apiService.post('/hobbies/', {hobby: hobby})
             .map((hobby: any) =>
             {
               if(hobby)
                 return new Hobby(hobby._id, hobby.title);
               else
                 return null;
             });

  }

}
