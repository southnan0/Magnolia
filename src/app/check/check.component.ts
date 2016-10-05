import {Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'

@Injectable()
export class CheckComponent implements CanActivate {

    constructor() { }

    public canActivate(
        route: ActivatedRouteSnapshot,state: RouterStateSnapshot
        ): boolean{
        console.log(route)
        return true;
    }
}