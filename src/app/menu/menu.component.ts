import {Component, OnInit} from '@angular/core';

import {GetMenuInfoService} from '../../services/menu.service';
import {Menu} from '../../class/menu';

@Component({
  selector: 'my-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [GetMenuInfoService]
})
export class MenuComponent implements OnInit {
  menus:Menu[];

  constructor(private getMenuInfoService:GetMenuInfoService) {

  }

  ngOnInit():void {
    this.getMenuInfoService
      .get().then(menuInfo => {
      this.menus = menuInfo
    })
  }

  ngOnChanges():void {
  }
}
