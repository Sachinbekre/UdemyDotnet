import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  baseUrl = environment.apiUrl;
  constructor(
    private http:HttpClient
  ) {
  }

  getmembers(){
   return this.http.get<Member[]>(this.baseUrl + 'users')
  }
  getmember(username){
   return this.http.get<Member>(this.baseUrl + 'users/'+ username)
  }
}
