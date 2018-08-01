import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { LoginService } from '../services/login.service';
import { LocalStorage } from 'ngx-webstorage';

@Injectable()
export class AuthguardGuard implements CanActivate {
  private status:any;

  constructor(private _userLogin:LoginService)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      var user = JSON.parse(localStorage.getItem('currentUser')); 
      var admin = JSON.parse(localStorage.getItem('Admin'));

      if(user != null){
        this.status = JSON.parse(localStorage.getItem('currentUser'));
      }
      
    return this.status.status;
  }
}
