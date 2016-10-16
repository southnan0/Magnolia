import {Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'my-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() hello:string;

  constructor() {
  }

  ngOnInit():void {
    
  }
}
