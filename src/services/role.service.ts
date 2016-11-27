import {Service} from './index';
var Mock = require('mockjs');
//todo  如何获取登录成功的操作员工号？
export class GetRoleInfoService extends Service {
  constructor(http) {
    super(http);
  }

  get(): Promise<any> {
    return this.post('getRoleInfo', {})
      .then(response => response.json().body.info/*, ()=> {
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
      .catch(this.handleError)
  }
}

export class EditRoleInfoService extends Service {
  constructor(http) {
    super(http);
  }

  get(roleName): Promise<any> {
    return this.post('editRoleInfo', {})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}

export class DelRoleInfoService extends Service {
  constructor(http) {
    super(http);
  }

  get(role): Promise<any> {
    return this.post('delRoleInfo', {})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}

export class AddRoleInfoService extends Service {
  constructor(http) {
    super(http);
  }

  get(roleName): Promise<any> {
    return this.post('addRoleInfo', {})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}
