import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import {User} from '../class/user';

@Injectable()
export class LoginService {
    constructor(private http: Http) { }
    get(userName: string,userPsw: string): Promise<User> {
        return this.http.post(`services/login`,{userName,userPsw})
            .toPromise()
            .then(response => response.json().body as User)
            .catch(this.handleError)
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
