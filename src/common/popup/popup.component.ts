import {
  Component, OnInit, Output, OnChanges, Input, Pipe, PipeTransform,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'md-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  providers: []
})
export class MdPopup implements OnInit {
  private _show:boolean = false;

  @Input() set show(v:boolean){
    if (v !== this._show) {
      this._show = v;
    }
  }

  @Output() hidePoput = new EventEmitter();

  constructor() {
  }

  ngOnInit():void {
  }

  _hidePopup(e:Event):boolean {
   /* if(this.hidePoput){
      this.hidePoput.emit();
    }else{
      this._show = false;
    }*/

    return false;
  }

  _handleCnt(e:Event):boolean {
    e.stopPropagation();
    return false;
  }
}
