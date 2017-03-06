import { ContactsClientAngular2Page } from './app.po';

describe('contacts-client-angular2 App', function() {
  let page: ContactsClientAngular2Page;

  beforeEach(() => {
    page = new ContactsClientAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
