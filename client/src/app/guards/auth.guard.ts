import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _loginService:LoginService,
    private toastr:ToastrService){

  }

  canActivate(): Observable<boolean> {
    return this._loginService.currentUser$.pipe(map(user =>{
      if(user) return true;
      this.toastr.error('You shall not pass!');
    }));
  }

}
