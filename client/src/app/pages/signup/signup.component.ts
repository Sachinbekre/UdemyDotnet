import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  registerForm:FormGroup;
  minDate: Date;
  maxDate: Date;
  validationErrors=[]
  constructor(
    private _loginService:LoginService,
    private toastr:ToastrService,
    private fb:FormBuilder,
    private router:Router
  ) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getFullYear());
   }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userName: ['',Validators.required],
      gender: ['',Validators.required],
      knownAs: ['',Validators.required],
      dateOfBirth: ['',Validators.required],
      city: ['',Validators.required],
      country: ['',Validators.required],
      password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
      confirmPassword: ['',[Validators.required,this.matchValue('password')]],
    })
    this.registerForm.controls.password.valueChanges.subscribe(()=>{
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    })
  }

  matchValue(matchTo:string):ValidatorFn{
    return (control:AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value?null:{isMatching:true}
    }
  }

  registerFrom(){
    this._loginService.register(this.registerForm.value).subscribe(response =>{
      this.router.navigate(['/members'])
    },error =>{
      console.log("error",error);
      this.validationErrors = error;
      // this.toastr.error(error.error);
    })
  }
  cancel(){
    this.cancelRegister.emit(false);
  }
}
