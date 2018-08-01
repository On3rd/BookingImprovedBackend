import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../services/login.service';

@Injectable()
export class AdminGuard implements CanActivate {
  private status:any;

  constructor(private _adminLogin:LoginService)
  {

  }
  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      
      var admin = JSON.parse(localStorage.getItem('Admin'));
     
      if(admin != null){
        this.status = JSON.parse(localStorage.getItem('Admin'));
      }

    return this.status.status;
  }
}
