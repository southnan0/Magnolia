import {Component, OnInit} from '@angular/core';

import {MenuService} from '../../services/menu.service';
import {Menu} from '../../class/menu';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'my-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [MenuService]
})
export class NavComponent implements OnInit {
  menuList:Menu[];
  menuShow:Boolean;
  route:ActivatedRoute;

  constructor(private router:Router, private menuService:MenuService) {
  }

  private _toggle():void {
    this.menuShow = !this.menuShow;
  }

  private _goToLogin():void{
    this._toggle();
    this.router.navigate(["login"])
  }

  ngOnInit():void {
    this.menuService
      .get('').then(menuList => {
      this.menuList = menuList
    })
  }

  ngOnChanges(router:Router):void {
  }
}
