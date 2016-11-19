import {Injectable}     from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class EditMessageService {
  constructor(private http:Http) {
  }

  get(message:string) {
    return this.http.post(`services/editMessage`, {body: {message}})
      .toPromise()
      .then(response => response.json().body)
      .catch(this.handleError)
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

@Injectable()
export class GetMessageService {
  constructor(private http:Http) {
  }

  get() {
    return this.http.post(`services/getMessage`, {body: {}})
      .toPromise()
      .then(response => response.json().body.message)
      .catch(this.handleError)
  }

  private handleError(error:any):Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
