import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Contact, ContactsService } from '../shared';

@Injectable()
export class ContactResolver implements Resolve<Contact> {
  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    console.log('ContactResolver fetching: ' + JSON.stringify(route.params));
    return this.contactsService.getContact(route.params['id'])
           .catch((err) => this.router.navigateByUrl('/'));

  }
}
