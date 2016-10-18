import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {Menu} from '../../class/menu';

@Component({
  selector: 'my-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [MenuService]
})
export class NavComponent implements OnInit {
  menuList:Menu[];
  menuShow:Boolean;

  constructor(private menuService:MenuService) {
  }

  private _toggle():void {
    this.menuShow = !this.menuShow;
  }

  ngOnInit():void {
    this.menuService
      .get('').then(menuList => {
      this.menuList = menuList
    })
  }
}
