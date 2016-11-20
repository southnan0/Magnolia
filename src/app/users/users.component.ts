import {Component, OnInit, OnChanges} from '@angular/core';
import {GetUserInfoService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
interface dataItem {
  checked?:boolean
}

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [GetUserInfoService]
})
export class UsersComponent implements OnInit,OnChanges {
  data:dataItem[];
  arrKey:Object = {
    userId: '用户编号',
    userName: '用户名',
    password: '密码',
    status: '状态',
    role: '角色',
    creator: '创建人',
    createTime: '创建时间',
    editor: '修改人',
    editTime: '修改时间'
  };
  private userName:string;
  private edit:boolean = false;
  private add:boolean = false;
  private sub:any;

  constructor(private getUserInfoService:GetUserInfoService, private _router:Router, private _activatedRoute:ActivatedRoute) {
  }

  ngOnInit():void {
    this.sub = this._activatedRoute.queryParams.subscribe(params => {
      this.edit = params['edit'] === 'true';
      this.add = params['add'] === 'true';
      if (!this.edit && !this.add) {
        this.getUserInfoService
          .get()
          .then((info)=> {
            this.data = info;
          }, (info)=> {
            this.data = info;
          })
      }
    });
  }

  ngOnChanges():void {
  }

  ngOnDestroy():void {
    this.sub.unsubscribe();
  }

  _onChange(type, value) {
    console.info(value)
  }

  _handleItem(item):void {
    this._router.navigate(['/backend/users'], {queryParams: {edit: true}})
  }

  _exitEdit():void {
    history.back();
  }

  _del():void {
    let arr = [];
    this.data.map((item, index)=> {
      if (item.checked) {
        arr.push(index)
      }
    })
    console.info(arr)
  }

  _add():void {
    this._router.navigate(['/backend/users'], {queryParams: {add: true}})
  }
}
