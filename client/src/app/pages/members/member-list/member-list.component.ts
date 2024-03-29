import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/Member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

  members$ :Observable<Member[]>;
  constructor(
    private memberService:MemberService
  ) { }

  ngOnInit(): void {
    this.members$ = this.memberService.getmembers();
  }

}
