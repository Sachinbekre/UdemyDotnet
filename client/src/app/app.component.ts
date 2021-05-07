import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'client';
  userList;
  constructor(
    private _appServices:AppService
  ){
  }
  ngOnInit(){
    this._appServices.getUsers().subscribe(response =>{
      console.log(response);
      this.userList = response;
    });
  }

}
