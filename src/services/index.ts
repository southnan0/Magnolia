import {Injectable}     from '@angular/core';
import {Http} from '@angular/http';

interface Header {
}
interface Body {
}
/*interface Request {
  header: Header,
  body: Body
}*/

@Injectable()
export class Service {
  http;
  constructor(http: Http) {
    this.http = http;
  }

  post(serviceName: string, request: Body): Promise<any> {
    return this.http.post(`services/${serviceName}`, {
      header: {},
      body: request
    }).toPromise()
  }

  handleError(resp: any): Promise<any> {
    console.info('An error occurred', resp.statusText);
    return Promise.reject(resp.statusText);
  }
}
