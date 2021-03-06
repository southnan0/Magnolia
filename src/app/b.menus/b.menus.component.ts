import {Component, OnInit, OnChanges} from '@angular/core';
import {
  GetMenuInfoService,
  AddMenuInfoService,
  EditMenuInfoService,
  DelMenuInfoService
} from '../../services/menu.service';
import {ActivatedRoute, Router} from '@angular/router';
interface dataItem {
  checked?:boolean
}

@Component({
  selector: 'my-menus',
  templateUrl: './b.menus.component.html',
  styleUrls: ['./b.menus.component.scss'],
  providers: [GetMenuInfoService, AddMenuInfoService, EditMenuInfoService, DelMenuInfoService]
})
export class MenusComponent implements OnInit,OnChanges {
  data:dataItem[];
  arrKey:Object = {
    menuId: '菜单编号',
    menuName: '菜单名称',
    status: '状态',
    creator: '创建人',
    createTime: '创建时间',
    editor: '修改人',
    editTime: '修改时间'
  };
  private edit:boolean = false;
  private add:boolean = false;
  private sub:any;
  private menuName:string;
  private menuId:string;

  constructor(private getMenuInfoService:GetMenuInfoService,
              private addMenuInfoService:AddMenuInfoService,
              private editMenuInfoService:EditMenuInfoService,
              private delMenuInfoService:DelMenuInfoService,
              private _router:Router,
              private _activatedRoute:ActivatedRoute) {
  }

  ngOnInit():void {
    this.sub = this._activatedRoute.queryParams.subscribe(params => {
      this.edit = params['edit'] === 'true';
      this.add = params['add'] === 'true';
      if (!this.edit && !this.add) {
        this.getMenuInfoService
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
    this._resetMenuData(item.menuId, item.menuName);
    this._router.navigate(['backend', 'menus'], {queryParams: {edit: true}})
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
    this.delMenuInfoService.get(arr)
      .then(()=> {
        console.info('删除成功')
      })
  }

  _add():void {
    this._resetMenuData();
    this._router.navigate(['/backend/menus'], {queryParams: {add: true}})
  }

  _resetMenuData(menuId:string = '', menuName:string = '') {
    this.menuId = menuId;
    this.menuName = menuName;
  }

  _submit():void {
    if (this.edit) {
      this._editMenu();
    } else if (this.add) {
      this._addMenu();
    }
  }

  _addMenu():void {
    this.addMenuInfoService.get(this.menuName)
      .then(()=> {
        console.info('新增成功')
        history.back()
      })
  }

  _editMenu():void {
    this.editMenuInfoService.get(this.menuName)
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
