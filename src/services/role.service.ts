import {Injectable}     from '@angular/core';
import {Http} from '@angular/http';
var Mock = require('mockjs');
const handleError = (error:any):Promise<any> => {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
};

//todo  如何获取登录成功的操作员工号？
@Injectable()
export class GetRoleInfoService {
  constructor(private http:Http) {
  }

  get():Promise<any> {
    return this.http.post(`services/getRoleInfo`, {header: {operId: ''}})
      .toPromise()
      .then(response=>response.json().body.info/*, ()=> {
       /!*let data = Mock.mock({
       'header': {
       'code': '0000',
       'message': ''
       },
       'body': {
       'info|1-5': [{
       'roleId|+1': 1,
       'roleName': '@FIRST',
       'parentRoleId': '',
       'parentRoleName': '',
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
      .catch(handleError)
  }
}

@Injectable()
export class EditRoleInfoService {
  constructor(private http:Http) {
  }

  get(roleName):Promise<any> {
    return this.http.post(`services/editRoleInfo`, {header: {operId: ''}})
      .toPromise()
      .then(response=>response.json().body)
      .catch(handleError)
  }
}

@Injectable()
export class DelRoleInfoService {
  constructor(private http:Http) {
  }

  get(role):Promise<any> {
    return this.http.post(`services/delRoleInfo`, {header: {operId: ''}})
      .toPromise()
      .then(response=>response.json().body)
      .catch(handleError)
  }
}

@Injectable()
export class AddRoleInfoService {
  constructor(private http:Http) {
  }

  get(roleName):Promise<any> {
    return this.http.post(`services/addRoleInfo`, {header: {operId: ''}})
      .toPromise()
      .then(response=>response.json().body)
      .catch(handleError)
  }
}
