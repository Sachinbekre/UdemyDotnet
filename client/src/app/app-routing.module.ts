import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestErrorsComponent } from './Errors/test-errors/test-errors.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:  () => import('./pages/pages.module').then(m => m.PagesModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
