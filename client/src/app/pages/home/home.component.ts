import { Component, OnInit, Output } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userList;
  registerMode:boolean = false;
  constructor(
    private _appServices:AppService
  ) { }

  ngOnInit(): void {
    // this.getUsers();
  }
  registerToggle(){
    this.registerMode = !this.registerMode;
  }

 getUsers(){
  this._appServices.getUsers().subscribe(response =>{
    console.log("home component",response);
    this.userList = response;
  });
}
fromRegister(event:boolean){
  this.registerMode =  event;
}
}
