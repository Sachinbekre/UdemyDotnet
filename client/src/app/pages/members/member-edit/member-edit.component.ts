import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/models/Member';
import { Users } from 'src/app/models/Users';
import { LoginService } from 'src/app/services/login.service';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.scss']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  member: Member;
  user: Users;
  constructor(
    private loginService: LoginService,
    private memberService: MemberService,
    private toastr: ToastrService
  ) {
    this.loginService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  @HostListener('window:beforeunload',['$event'])unload($event:any){
    if(this.editForm.dirty){
      console.log("window loading")
      $event.returnValue = true;
    }
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    this.memberService.getmember(this.user.username).subscribe(member => {
      this.member = member;
    })
  }
  updateMember() {
    console.log("member", this.member);
    this.memberService.updateMember(this.member).subscribe(res =>{
      this.toastr.success("Profile updated successfully");
      this.editForm.reset(this.member);
    })

  }
}
