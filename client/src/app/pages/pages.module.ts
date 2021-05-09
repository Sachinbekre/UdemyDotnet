import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    // FormsModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
