import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactContainerComponent } from './contact-container/contact-container.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactListRowComponent } from './contact-listrow/contact-listrow.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactHobbyAddComponent } from './contact-hobby/contact-hobby-add/contact-hobby-add.component';
import { ContactHobbyListComponent } from './contact-hobby/contact-hobby-list/contact-hobby-list.component';
import { ContactHobbyFormComponent } from './contact-hobby/contact-hobby-form/contact-hobby-form.component';
import { ContactResolver } from './contact-resolver.service';
import { SharedModule, TextInputComponent} from '../shared';

const contactRouting: ModuleWithProviders = RouterModule.forChild([

  {
    path: 'contact',
    component: ContactHomeComponent,
    children:
    [
      {
        path: 'new',
        component: ContactAddComponent
      },
      {
        path: ':id',
        component: ContactDetailComponent,
        resolve: {
          contact: ContactResolver
        },

        children:
        [
          {
            path: 'hobbies/new',
            component: ContactHobbyAddComponent
          }
        ]
      },
      {
        path: ':id/edit',
        component: ContactEditComponent,
        resolve: {
          contact: ContactResolver
        }
      }

    ]
  },
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  }
]);

@NgModule({
  imports: [
    SharedModule,
    contactRouting
  ],
  declarations: [
    ContactContainerComponent,
    ContactHomeComponent,
    ContactAddComponent,
    ContactDetailComponent,
    ContactEditComponent,
    ContactListComponent,
    ContactListRowComponent,
    ContactFormComponent,
    ContactHobbyListComponent,
    ContactHobbyAddComponent,
    ContactHobbyFormComponent
  ],

  providers: [ContactResolver]
})
export class ContactModule { }
