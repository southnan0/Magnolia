import {Service} from './index';
var Mock = require('mockjs');

export class GetUserInfoService extends Service {
  constructor(http) {
    super(http);
  }

  get() {
    return this.post(`services/getUserInfo`, {})
      .then(response => response.json().body.info, () => {
        return Mock.mock({
          'header': {
            'code': '0000',
            'message': ''
          },
          'body': {
            'info|1-10': [{
              'userId': '1',
              'userName': Mock.Random.cname(),
              'password': 'er32df',
              'status': '0',
              'role': Mock.Random.word(3),
              'creator': Mock.Random.cname(),
              'createTime': Mock.Random.date('yyyy-MM-dd'),
              'editor': Mock.Random.cname(),
              'editTime': Mock.Random.date('yyyy-MM-dd')
            }]
          }
        }).body.info;
      })
      .catch(this.handleError)
  }
}

export class EditUserInfoService extends Service {
  constructor(http) {
    super(http);
  }

  get(userId, userName, password) {
    return this.http.post(`services/editUserInfo`, {body: {}})
      .toPromise()
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}

export class AddUserInfoService extends Service {
  constructor(http) {
    super(http);
  }

  get(userId, userName, password) {
    return this.post(`services/addUserInfo`, {body: {}})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}

export class DelUserInfoService extends Service {
  constructor(http) {
    super(http);
  }

  get(userId) {
    return this.post(`services/delUserInfo`, {userId})
      .then(response => response.json().body)
      .catch(this.handleError)
  }
}
