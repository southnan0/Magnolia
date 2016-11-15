import {Component, OnInit, OnChanges} from '@angular/core';
import '../../../node_modules/kindeditor/themes/default/default.css';
declare var KindEditor:any;
require("imports?this=>window!../../../node_modules/kindeditor/kindeditor-all");

@Component({
  selector: 'my-backend',
  templateUrl: './main.component.html',
  styleUrls: [/*'../../../node_modules/kindeditor/themes/default/default.css',*/'./main.component.scss'],
  providers: []
})
export class MainComponent implements OnInit,OnChanges {
  private editor:any;

  constructor() {
  }

  ngOnInit():void {
    this.editor = KindEditor.create('#editor_id');
  }

  ngOnChanges():void {
  }

  _submit():void{
    console.info(this.editor.html())
  }
}
