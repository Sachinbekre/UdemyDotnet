import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    SignupComponent,
    MemberListComponent,
    MemberDetailsComponent,
    MessagesComponent,
    ListsComponent,
    MemberCardComponent,
    // FormsModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
