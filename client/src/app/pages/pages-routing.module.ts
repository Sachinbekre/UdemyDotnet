import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../Errors/not-found/not-found.component';
import { ServerErrorComponent } from '../Errors/server-error/server-error.component';
import { TestErrorsComponent } from '../Errors/test-errors/test-errors.component';
import { AuthGuard } from '../guards/auth.guard';
import { PreventUnsavedChangesGuard } from '../guards/prevent-unsaved-changes.guard';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
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
        path:'members/:username',component:MemberDetailsComponent
      },
      {
        path:'member/edit',component:MemberEditComponent,canDeactivate:[PreventUnsavedChangesGuard]
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
    path:'errors',component:TestErrorsComponent
  },
  {
    path:'not-found',component:NotFoundComponent
  },
  {
    path:'server-error',component:ServerErrorComponent
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
