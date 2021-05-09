import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/Users';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  Users:any ={};
  constructor(
    public _loginService:LoginService
  ) { }

  ngOnInit(): void {
  }
 login(){
   console.log("Users",this.Users);
   this._loginService.login(this.Users).subscribe(response => {
    console.log("login response",response);
   },error =>{
    console.log("login errors",error);
   });
 }


 logout(){
   this._loginService.logout();
 }

//  getCurrentUser(){
//    this._loginService.currentUser$.subscribe(users =>{
//      this.loggedIn = !!users;
//      this.Users = users;
//    },error =>{
//      console.log(error);
//    })
//  }
}
