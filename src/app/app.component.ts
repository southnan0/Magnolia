import {Component, OnChanges} from '@angular/core';

import {ApiService} from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnChanges {
  constructor(private api:ApiService) {
    // Do something with api
  }

  ngOnChanges():void {
  }
}
