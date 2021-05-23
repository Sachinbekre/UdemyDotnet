import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Member } from '../models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  baseUrl = environment.apiUrl;
  member:Member[]=[];
  constructor(
    private http:HttpClient
  ) {
  }

  getmembers(){
    if(this.member.length > 0) return of(this.member);
   return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
     map(member =>{
       this.member = member;
       return member;
     })
   )
  }
  getmember(username){
    const member = this.member.find(x => x.username === username);
    if(member !== undefined) return of(member);
   return this.http.get<Member>(this.baseUrl + 'users/'+ username)
  }
  updateMember(member:Member){
    return this.http.put(this.baseUrl+'users',member).pipe(
      map(() =>{
        const index = this.member.indexOf(member);
        this.member[index] = member;
      })
    );
  }
}
