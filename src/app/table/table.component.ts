import {
  Component, OnInit, Output, OnChanges, Input, Pipe, PipeTransform,
  EventEmitter
} from '@angular/core';
interface dataItem {
  checked?:boolean
}

@Component({
  selector: 'md-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: []
})
export class MdTable implements OnInit,OnChanges {
  private _data:dataItem[];
  private _keys:Array<any>;
  private _objKey:Object;
  private _fullSelected:boolean;

  get data():dataItem[] {
    return this._data;
  }

  @Input() set data(v:dataItem[]) {
    if (v !== this._data) {
      this._data = v;
      this._data.map((item)=> {
        if (item.checked === undefined) {
          item.checked = false;
          this._fullSelected = false;
        } else if (!item.checked) {
          this._fullSelected = false;
        } else {
          this._fullSelected = true;
        }
      })
    }
  }

  @Input() set arrKey(v:Object) {
    if (v !== this._keys) {
      this._objKey = v;
      this._keys = Object.keys(v);
    }
  }

  @Output() handleItem = new EventEmitter();

  constructor() {
  }

  ngOnInit():void {
  }

  ngOnChanges():void {
  }

  _select(type,item, e:Event):boolean {
    e.stopPropagation();
    item.checked = !item.checked;
    if (this._fullSelected) {
      this._fullSelected = false;
    } else {
      this._fullSelected = this._resetFullSelectedStatus();
    }
    return type === 'input';
  }

  _fullSelect(type,e:Event):boolean {
    e.stopPropagation();
    this._fullSelected = !this._fullSelected;
    this._data.map((item)=> {
      item.checked = this._fullSelected;
    });
    return type === 'input';
  }

  _resetFullSelectedStatus():boolean {
    let selected = true;
    this._data.map((item)=> {
      selected = selected && item.checked;
    });
    return selected;
  }

  _handleItem(item, e:Event):boolean {
    this.handleItem.emit(item);
    return false;
  }
}

@Pipe({name: 'values', pure: false})
export class ValuesPipe implements PipeTransform {
  transform(value:any, args:any[] = null):any {
    console.info(value)
    return Object.keys(value).map(key => value[key]);
  }
}
