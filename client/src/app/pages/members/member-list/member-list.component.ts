import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/Member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  members:Member[];
  constructor(
    private memberService:MemberService
  ) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(){
    this.memberService.getmembers().subscribe(members =>{
      this.members = members;
      console.log("members",members);
    })
  }

}
