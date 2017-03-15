import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ApiService } from './api.service';
import { ContactsService } from './contacts.service';
import { environment } from '../../../environments/environment';

describe('ContactsService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: environment.api_url, useClass: 'http://example.com'},
        ApiService,
        ContactsService,
        { provide: XHRBackend, useClass: MockBackend },
        MockBackend
      ]
    });
  });

  describe('getAllContacts()', () => {

    it('should return an Observable<Contact[]>',
        inject([ContactsService, MockBackend], (contactsService, mockBackend) => {

        const mockResponse = {
          data: [
            { _id: '58c601ff734d1d4658879199',
              email: 'andrew.@gmail.com',
              first_name: 'Andrew',
              last_name: 'Cisternino',
              hobbies : [{
                _id: '58c60258734d1d46588791b0',
                title: 'baseball'
              }]
            },
            { _id: '58c75cad2cc51711008c4b93',
              email: 'michelle@gmail.com',
              first_name: 'Michelle',
              last_name: 'Smith',
              hobbies: [{
                _id: '58c6041c03ed5e11009768e2',
                title: 'yoga'
              }]
            }
          ]
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        contactsService.getAllContacts().subscribe((contacts) => {
          expect(contacts.length).toBe(2);
          expect(contacts[0].first_name).toEqual('Andrew');
          expect(contacts[1].first_name).toEqual('Michelle');
          expect(contacts[0].hobbies.length).toBe(1);
          expect(contacts[1].last_name).toEqual('Smith');
        });

    }));
  });
});
