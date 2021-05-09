import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from '../models/Users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BaseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new ReplaySubject<Users>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(
    private _http:HttpClient
  ) { }

  login(users:any){
    let url = 'account/login'
    // return this._http.post(this.BaseUrl+url,users);
    return this._http.post(this.BaseUrl+url,users).pipe(
      map((response:Users) =>{
        const users = response;
        if(users){
          localStorage.setItem('users', JSON.stringify(users));
          this.currentUserSource.next(users);
        }
      })
    )
  }

  register(users:any){
    let url = 'account/register'
    // return this._http.post(this.BaseUrl+url,users);
    return this._http.post(this.BaseUrl+url,users).pipe(
      map((response:Users) =>{
        if(users){
          localStorage.setItem('users', JSON.stringify(response));
          this.currentUserSource.next(response);
        }
      })
    )
  }

  setCurrentUser(users:Users){
    this.currentUserSource.next(users);
  }

  logout(){
    localStorage.removeItem('users');
    this.currentUserSource.next(null);
  }
}
