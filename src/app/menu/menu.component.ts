import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import {GetMenuInfoService} from '../../services/menu.service';
import {Menu} from '../../class/menu';

@Component({
  selector: 'my-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [GetMenuInfoService]
})
export class MenuComponent implements OnInit {
  route:ActivatedRoute;
  menus:Menu[];

  constructor(private router:Router, private getMenuInfoService:GetMenuInfoService) {
  }

  ngOnInit():void {
    this.getMenuInfoService
      .get().then(menuInfo => {
      this.menus = menuInfo
    })
  }

  ngOnChanges(router:Router):void {
  }
}
