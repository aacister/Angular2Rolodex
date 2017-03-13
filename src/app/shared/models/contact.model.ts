import {Hobby} from './hobby.model';

export class Contact {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  hobbies: Array<Hobby>;
  constructor(
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    hobbies: Array<Hobby>) {
    this.id = id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.hobbies = hobbies;
  }



}
