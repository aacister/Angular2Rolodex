import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactModule} from './contact/contact.module';
import { HobbyModule} from './hobby/hobby.module';
import { AuthModule } from './auth/auth.module';

import {
SharedModule,
  ApiService,
  ContactsService,
  HobbiesService,
  JwtService,
  UserService,
  HeaderComponent,
  FooterComponent
} from './shared';


const rootRouting: ModuleWithProviders = RouterModule.forRoot([
{
  path: 'contact',
  loadChildren: () => ContactModule
},
{
  path: 'hobby',
  loadChildren: () => HobbyModule
},
{
  path: '',
  redirectTo: '/contact',
  pathMatch: 'full'
}

]);

@NgModule({
  declarations: [
  AppComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    ContactModule,
    HobbyModule,
    rootRouting
  ],
  providers: [
  ApiService,
    ContactsService,
    HobbiesService,
    JwtService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
