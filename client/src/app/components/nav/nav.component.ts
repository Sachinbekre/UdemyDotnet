import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    public _loginService:LoginService,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this._loginService.currentUser$.subscribe(users =>{
      if(users){
        debugger;
        this.Users = users;
        console.log("observable",this.Users);
      }

    });
  }
 login(){
   console.log("Users",this.Users);
   this._loginService.login(this.Users).subscribe(response => {
    console.log("login response",response);
    this.Users = response;
    this.router.navigateByUrl('/members');
   },error =>{
   });
 }


 logout(){
   this._loginService.logout();
   this.router.navigateByUrl('/');
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
