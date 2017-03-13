import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { SharedModule, TextInputComponent} from '../shared';
import { HobbyListComponent } from './hobby-list/hobby-list.component';
import { HobbyListRowComponent } from './hobby-listrow/hobby-listrow.component';
import { HobbyHomeComponent } from './hobby-home/hobby-home.component';
import { HobbyAddComponent } from './hobby-add/hobby-add.component';
import { HobbyFormComponent } from './hobby-form/hobby-form.component';

const hobbyRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'hobby',
    component: HobbyHomeComponent,
    children:
    [
      {
        path: 'new',
        component: HobbyAddComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/hobby',
    pathMatch: 'full'
  }
]);

@NgModule({
  imports: [
    SharedModule,
    hobbyRouting
  ],
  declarations: [
    HobbyListComponent,
    HobbyListRowComponent,
    HobbyHomeComponent,
    HobbyAddComponent,
    HobbyFormComponent],

  providers: []
})
export class HobbyModule { }
