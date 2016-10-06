import { Injectable }     from '@angular/core';
import { Http } from '@angular/http';
import {Menu} from '../class/menu';

@Injectable()
export class MenuService {
    constructor(private http: Http) { }
    get(userName: string): Promise<Menu[]> {
        return this.http.get(`menu?userName=${userName}`)
            .toPromise()
            .then(response => response.json().body.menuList as Menu[])
            .catch(this.handleError)
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}