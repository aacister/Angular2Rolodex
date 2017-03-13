import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactModule} from './contact/contact.module';
import { HobbyModule} from './hobby/hobby.module';


import {
SharedModule,
ApiService,
ContactsService,
HobbiesService,
HeaderComponent,
FooterComponent
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    SharedModule,
    ContactModule,
    HobbyModule,
    rootRouting
  ],
  providers: [
    ApiService,
    ContactsService,
    HobbiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
