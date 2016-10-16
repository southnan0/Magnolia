import {Component, OnInit} from '@angular/core';
//todo  home是一个模块 ngModule
@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hello = '123';

  constructor() {
    // Do stuff
  }

  ngOnInit() {
  }

}
