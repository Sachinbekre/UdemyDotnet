import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  BaseUrl = 'https://localhost:5001/api/'
  constructor(
    private _http:HttpClient
  ) { }

  getUsers(){
    return this._http.get(this.BaseUrl+'Users');
  }
}
