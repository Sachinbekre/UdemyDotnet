import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
      {
        path:'members',component:MemberListComponent,canActivate:[AuthGuard]
      },
      {
        path:'members/:id',component:MemberDetailsComponent
      },
      {
        path:'lists',component:ListsComponent
      },
      {
        path:'messages',component:MessagesComponent
      },
    ]
  },
  {
    path:'signup',component:SignupComponent
  },

  {
    path:'**',component:HomeComponent,pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
