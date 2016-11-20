import {Injectable}     from '@angular/core';
import {Http} from '@angular/http';
var Mock = require('mockjs');

@Injectable()
export class GetUserInfoService {
  constructor(private http:Http) {
  }

  get() {
    return this.http.post(`services/getUserInfo`, {body: {}})
      .toPromise()
      .then(response => response.json().body.info, ()=> {
        return Mock.mock({
          'header': {
            'code': '0000',
            'message': ''
          },
          'body': {
            'info|1-10': [{
              'userId|+1': 1,
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

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

@Injectable()
export class EditUserInfoService {
  constructor(private http:Http) {
  }

  get() {
    return this.http.post(`services/editUserInfo`, {body: {}})
      .toPromise()
      .then(response => response.json().body)
      .catch(this.handleError)
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
