import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  register:any ={};
  @Output() cancelRegister = new EventEmitter();
  constructor(
    private _loginService:LoginService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {

  }
  registerFrom(){
    console.log(this.register)
    this._loginService.register(this.register).subscribe(response =>{
      console.log("register",response);
      this.cancel();
    },error =>{
      console.log("error",error);
      this.toastr.error(error.error);
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
  }
}
