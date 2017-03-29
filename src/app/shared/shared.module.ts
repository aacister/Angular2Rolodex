import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {TextInputComponent} from './common/common-textinput/common-textinput.component';
import { CheckboxInputComponent } from './common/common-checkboxinput/common-checkboxinput.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    TextInputComponent,
    CheckboxInputComponent
  ],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TextInputComponent,
    CheckboxInputComponent
  ]
})
export class SharedModule { }
