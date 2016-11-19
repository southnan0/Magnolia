import {Injectable}     from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class getUserInfoService {
  constructor(private http:Http) {
  }

  get() {
    return this.http.post(`services/getUserInfo`, {body: {}})
      .toPromise()
      .then(response => response.json().body.info)
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
