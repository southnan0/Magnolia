import {Component, OnInit, OnChanges} from '@angular/core';
import {
  GetUserInfoService,
  AddUserInfoService,
  EditUserInfoService,
  DelUserInfoService
} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
interface dataItem {
  checked?:boolean
}

@Component({
  selector: 'my-users',
  templateUrl: './b.users.component.html',
  styleUrls: ['./b.users.component.scss'],
  providers: [GetUserInfoService, AddUserInfoService, EditUserInfoService, DelUserInfoService]
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
  private edit:boolean = false;
  private add:boolean = false;
  private sub:any;
  private userName:string;
  private userId:string;
  private password:string;

  constructor(private getUserInfoService:GetUserInfoService,
              private addUserInfoService:AddUserInfoService,
              private editUserInfoService:EditUserInfoService,
              private delUserInfoService:DelUserInfoService,
              private _router:Router,
              private _activatedRoute:ActivatedRoute) {
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
    this._resetUserData(item.userId, item.userName, item.password);
    this._router.navigate(['backend', 'users'], {queryParams: {edit: true}})
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
    });
    this.delUserInfoService.get(arr)
      .then(()=> {
        console.info('删除成功')
      })
  }

  _add():void {
    this._resetUserData();
    this._router.navigate(['/backend/users'], {queryParams: {add: true}})
  }

  _resetUserData(userId:string = '', userName:string = '', password:string = '') {
    this.userId = userId;
    this.userName = userName;
    this.password = password;
  }

  _submit():void {
    if (this.edit) {
      this._editUser();
    } else if (this.add) {
      this._addUser();
    }
  }

  _addUser():void {
    this.addUserInfoService.get(this.userId, this.userName, this.password)
      .then(()=> {
        console.info('新增成功')
        history.back()
      })
  }

  _editUser():void {
    this.editUserInfoService.get(this.userId, this.userName, this.password)
      .then(()=> {
        console.info('编辑成功')
        history.back()
      })
  }

//todo 可用户票据校验
  canDeactivate():boolean {
    return true;
  }
}
