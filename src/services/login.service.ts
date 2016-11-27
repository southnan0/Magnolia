import {User} from '../class/user';
import {Service} from './index';

export class LoginService extends Service{
  constructor(http) {
    super(http);
  }

  get(userName: string, userPsw: string): Promise<any> {
    return this.post('login', {userName, userPsw})
      .then(response => response.json().body as User)
      .catch(this.handleError)
  }
}
