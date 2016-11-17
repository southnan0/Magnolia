import {Injectable}     from '@angular/core';
import {Http} from '@angular/http';
import {Menu} from '../class/menu';
var Mock = require('mockjs');

@Injectable()
export class MenuService {
  constructor(private http:Http) {
  }

  get(userName:string):Promise<Menu[]> {
    return this.http.get(`services/menu?userName=${userName}`)
      .toPromise()
      .then(response => response.json().body.menuList as Menu[])
      .catch(this.handleError)
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
//todo  如何获取登录成功的操作员工号？
@Injectable()
export class GetMenuInfoService {
  constructor(private http:Http) {
  }

  get():Promise<Menu[]> {
    return this.http.post(`services/getMenuInfo`, {header: {operId: ''}})
      .toPromise()
      .then(response=>response.json().body.info as Menu[], ()=> {
        let data = Mock.mock({
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
        console.info(data.body.info)
        return data.body.info;
      })
      .catch(this.handleError)
  }

  private handleError(error:any):Promise<any> {
    console.info(1)
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);

  }
}
