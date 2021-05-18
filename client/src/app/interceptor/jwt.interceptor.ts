import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { take } from 'rxjs/operators';
import { Users } from '../models/Users';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private loginService:LoginService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser: Users;
    this.loginService.currentUser$.pipe(take(1)).subscribe(user =>{
      currentUser = user;
    });
    if(currentUser){
      request = request.clone({
        setHeaders:{
          Authorization : `Bearer ${currentUser.token}`
        }
      })
    }
    return next.handle(request);
  }
}
