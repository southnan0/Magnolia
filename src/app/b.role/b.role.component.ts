import {Component, OnInit, OnChanges} from '@angular/core';
import {
  GetRoleInfoService,
  AddRoleInfoService,
  EditRoleInfoService,
  DelRoleInfoService
} from '../../services/role.service';
import {ActivatedRoute, Router} from '@angular/router';
interface dataItem {
  checked?:boolean
}

@Component({
  selector: 'my-role',
  templateUrl: './b.role.component.html',
  styleUrls: ['./b.role.component.scss'],
  providers: [GetRoleInfoService, AddRoleInfoService, EditRoleInfoService, DelRoleInfoService]
})
export class RoleComponent implements OnInit,OnChanges {
  data:dataItem[];
  arrKey:Object = {
    roleId: '角色编号',
    roleName: '角色名称',
    status: '状态',
    creator: '创建人',
    createTime: '创建时间',
    editor: '修改人',
    editTime: '修改时间'
  };
  private edit:boolean = false;
  private add:boolean = false;
  private sub:any;
  private roleName:string;
  private roleId:string;

  constructor(private getRoleInfoService:GetRoleInfoService,
              private addRoleInfoService:AddRoleInfoService,
              private editRoleInfoService:EditRoleInfoService,
              private delRoleInfoService:DelRoleInfoService,
              private _router:Router,
              private _activatedRoute:ActivatedRoute) {
  }

  ngOnInit():void {
    this.sub = this._activatedRoute.queryParams.subscribe(params => {
      this.edit = params['edit'] === 'true';
      this.add = params['add'] === 'true';
      if (!this.edit && !this.add) {
        this.getRoleInfoService
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
    this._resetRoleData(item.roleId, item.roleName);
    this._router.navigate(['backend', 'role'], {queryParams: {edit: true}})
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
    this.delRoleInfoService.get(arr)
      .then(()=> {
        console.info('删除成功')
      })
  }

  _add():void {
    this._resetRoleData();
    this._router.navigate(['/backend/role'], {queryParams: {add: true}})
  }

  _resetRoleData(roleId:string = '', roleName:string = '') {
    this.roleId = roleId;
    this.roleName = roleName;
  }

  _submit():void {
    if (this.edit) {
      this._editRole();
    } else if (this.add) {
      this._addRole();
    }
  }

  _addRole():void {
    this.addRoleInfoService.get(this.roleName)
      .then(()=> {
        console.info('新增成功')
        history.back()
      })
  }

  _editRole():void {
    this.editRoleInfoService.get(this.roleName)
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
