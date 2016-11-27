import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
interface dataItem {
  checked?: boolean
}

import {
  GetDicInfoService,
  GetDicItemService,
  EditDicItemService,
  AddDicItemService,
  DelDicItemService
} from '../../services/dic.service';

@Component({
  selector: 'my-dic',
  templateUrl: './b.dic.component.html',
  styleUrls: ['./b.dic.component.scss'],
  providers: [
    GetDicInfoService,
    GetDicItemService,
    EditDicItemService,
    AddDicItemService,
    DelDicItemService]
})
export class DicComponent implements OnInit {
  private dicInfo: dataItem[] = [];
  private dicItem: dataItem[] = [];
  private arrDicKey: Object = {
    dicId: '编码',
    dicName: '参数',
    reamrk: '备注'
  };
  private arrDicItemKey: Object = {
    dicItemName: '子参数名称',
    dicItemValue1: '子参数值1',
    dicItemValue2: '子参数值2',
    remark: '备注'
  };
  private edit: boolean = false;
  private add: boolean = false;
  private sub: any;
  private dicItemId: string;
  private dicItemName: string;

  constructor(private getDicInfoService: GetDicInfoService,
              private getDicItemService: GetDicItemService,
              private editDicItemService: EditDicItemService,
              private addDicItemService: AddDicItemService,
              private delDicItemService: DelDicItemService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.sub = this._activatedRoute.queryParams.subscribe(params => {
      this.edit = params['edit'] === 'true';
      this.add = params['add'] === 'true';
      if (!this.edit && !this.add) {
        this.getDicInfoService
          .get().then(dicInfo => {
          this.dicInfo = dicInfo
        })
      }
    });
  }

  ngOnChanges(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  _add(): void {
  }

  _del(): void {
  }

  _search(): void {
  }

  _onChange(): void {
  }

  _exitEdit(): void {
    history.back();
  }

  _submit(): void {
    if (this.edit) {
      this._editDic();
    } else if (this.add) {
      this._addDic();
    }
  }

  _editDic():void {
    //todo  传参
    this.editDicItemService.get()
      .then(()=> {
        console.info('编辑成功')
        history.back()
      })
  }

  _addDic():void {
    this.addDicItemService.get()
      .then(()=> {
        console.info('新增成功')
        history.back()
      })
  }

  _selectDic(dicId: string): void {
    this.getDicItemService.get(dicId).then((dicItem) => {
      this.dicItem = dicItem;
    })
  }

  _selectDicItem(item): void {
    this._resetDicItemData(item.dicItemId, item.dicItemName);
    this._router.navigate(['backend', 'dic'], {queryParams: {edit: true}})
  }

  _resetDicItemData(dicItemId: string = '', dicItemName: string = '') {
    this.dicItemId = dicItemId;
    this.dicItemName = dicItemName;
  }
}
