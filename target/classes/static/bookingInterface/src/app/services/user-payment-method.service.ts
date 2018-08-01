import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { UserPaymentMethod } from '../classes/user-payment-method';

@Injectable()
export class UserPaymentMethodService {

  private baseUrl : string = 'http://localhost:8080/api';
  private header = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.header});
  private userPaymentMethod = new UserPaymentMethod();

  constructor(private _http:Http) { }

  getUserPaymentMethods()
  {
    return this._http.get(this.baseUrl+'/userPaymentMethod',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getUserPaymentMethod(id:number)
  {
    return this._http.get(this.baseUrl+'/userPaymentMethod/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  deleteUserPaymentMethod(id:number)
  {
    return this._http.delete(this.baseUrl+'/userPaymentMethod/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  createUserPaymentMethod(userPaymentMethod:UserPaymentMethod)
  {
    return this._http.post(this.baseUrl+'/userPaymentMethod',JSON.stringify(userPaymentMethod),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  updateUserPaymentMethod(userPaymentMethod:UserPaymentMethod)
  {
    return this._http.put(this.baseUrl+'/userPaymentMethod',JSON.stringify(userPaymentMethod),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }


  errorHandler(error:Response)
  {
   return Observable.throw(error||"SERVER ERROR");
  }

  setter(userPaymentMethod:UserPaymentMethod)
  {
   this.userPaymentMethod=userPaymentMethod;
  }
  getter()
  {
    return this.userPaymentMethod;
  }

}
