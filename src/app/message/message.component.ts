import {Component, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'my-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  providers: []
})
export class MessageComponent implements OnInit,OnChanges {
  constructor() {
  }

  ngOnInit():void {
  }

  ngOnChanges():void {
  }
}
