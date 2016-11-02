import {Component, OnInit,OnChanges} from '@angular/core';

@Component({
  selector:'my-login',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.scss']
})
export class LoginComponent implements OnInit,OnChanges{
  private userName:string;
  private userPsw:string;
  ngOnInit():void{
  }

  ngOnChanges():void{
    console.info(this.userName)
  }
}
