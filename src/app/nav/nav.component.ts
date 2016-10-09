import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {Menu} from '../../class/menu';

@Component({
  selector: 'my-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [MenuService]
})
export class NavComponent implements OnInit {
  menuList: Menu[];
  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService
      .get('').then(menuList => {
        this.menuList = menuList
      })
  }
}