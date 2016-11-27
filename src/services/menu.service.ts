import {Menu} from '../class/menu';
import {Service} from './index';
var Mock = require('mockjs');

export class MenuService extends Service {
  constructor(http) {
    super(http);
  }

  get(userName: string): Promise<Menu[]> {
    return this.post('menu',{})
      .then(response => response.json().body.menuList as Menu[])
      .catch(this.handleError)
  }
}
//todo  如何获取登录成功的操作员工号？
export class GetMenuInfoService extends Service {
  constructor(http) {
    super(http);
  }

  get(): Promise<Menu[]> {
    return this.post(`getMenuInfo`, {})
      .then(response => response.json().body.info as Menu[]/*, ()=> {
       /!*let data = Mock.mock({
       'header': {
       'code': '0000',
       'message': ''
       },
       'body': {
       'info|1-5': [{
       'menuId|+1': 1,
       'menuName': '@FIRST',
       'parentMenuId': '',
       'parentMenuName': '',
       'creator': '',
       'createTime': Mock.Random.date('yyyy-MM-dd'),
       'editor': '',
       'editTime': Mock.Random.date('yyyy-MM-dd'),
       'remark': '@FIRST'
       }]
       }
       });
       console.info(data.body.info)*!/
       return data.body.info;
       }*/)
      .catch(this.handleError)
  }
}

export class EditMenuInfoService extends Service {
  constructor(http) {
    super(http);
  }

  get(menuName): Promise<Menu[]> {
    return this.post(`services/editMenuInfo`, {header: {operId: ''}})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}

export class DelMenuInfoService extends Service {
  constructor( http) {
    super(http);
  }

  get(menu): Promise<Menu[]> {
    return this.post(`services/delMenuInfo`, {header: {operId: ''}})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}

export class AddMenuInfoService extends Service{
  constructor(http) {
    super(http)
  }

  get(menuName): Promise<Menu[]> {
    return this.post(`services/addMenuInfo`, {header: {operId: ''}})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}
