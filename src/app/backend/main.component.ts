import {Component, OnInit, OnChanges} from '@angular/core';
import '../../../node_modules/kindeditor/themes/default/default.css';
require("imports?this=>window!../../../node_modules/kindeditor/kindeditor-all");

declare var KindEditor:any;

@Component({
  selector: 'my-backend',
  templateUrl: './main.component.html',
  styleUrls: [/*'../../../node_modules/kindeditor/themes/default/default.css',*/'./main.component.scss'],
  providers: []
})
export class MainComponent implements OnInit,OnChanges {

  constructor() {
  }

  ngOnInit():void {
    //console.info(KindEditor)
    KindEditor.ready(function(K) {
      this.editor = K.create('#editor_id');
    });
  }

  ngOnChanges():void {
  }
}
