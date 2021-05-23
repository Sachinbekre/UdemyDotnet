import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  loadingCount = 0;
  constructor(
    private ngxSpinnser: NgxSpinnerService
  ) { }

  start(){
    this.loadingCount++;
    this.ngxSpinnser.show(undefined,{
      type:'ball-spin-clockwise',
      bdColor:'rgba(255,255,255,0)',
      color:'#333333',
      size:'medium',

      // fullScreen:false
    });
  }

  stop(){
    this.loadingCount--;
    if(this.loadingCount <= 0){
      this.loadingCount = 0;
      this.ngxSpinnser.hide();
    }
  }
}
