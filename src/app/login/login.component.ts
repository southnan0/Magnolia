import {Component, OnInit, OnChanges} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {User} from '../../class/user';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit,OnChanges {
  private userName:string;
  private userPsw:string;
  user:User;

  constructor(private loginService:LoginService) {
    this.user = new User();
  }

  ngOnInit():void {
  }

  ngOnChanges():void {
  }
//todo  将用户信息存入sessionStorage  或者全局变量
  _doLogin(userName:string, userPsw:string) {
    this.loginService
      .get(userName, userPsw)
      .then(user=> {
        this.user = user;
        history.back()
      })
  }

  _onSubmit(event:Event):void {
    this._doLogin(this.userName,this.userPsw);
    this.userName = '';
    this.userPsw = '';
  }

  _onChange(key:string, value:any):void {
    this[key] = value;
  }
}
