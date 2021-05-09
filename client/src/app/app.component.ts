import { Component, OnInit } from '@angular/core';
import { Users } from './models/Users';
import { AppService } from './services/app.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client';

  constructor(
    private _appServices:AppService,
    private _loginService :LoginService
  ){
  }
  ngOnInit(){
    this.setCurrentUsers();
  }

  setCurrentUsers(){
    const users:Users = JSON.parse(localStorage.getItem('users'));
    this._loginService.setCurrentUser(users);
   }




}
