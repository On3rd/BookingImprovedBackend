import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { UserContactDetails } from '../classes/user-contact-details';

@Injectable()
export class UserContactDetailsService {

  private baseUrl : string = 'http://localhost:8080/api';
  private header = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.header});
  private userContactDetails = new UserContactDetails();

  constructor(private _http:Http) { }

  getUserContactDetails()
  {
    return this._http.get(this.baseUrl+'/userContactInformation',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getUserContactDetail(id:number)
  {
    return this._http.get(this.baseUrl+'/userContactInformation/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  deleteUserContactDetails(id:number)
  {
    return this._http.delete(this.baseUrl+'/userContactInformation/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  createUserContactDetails(userContactDetails:UserContactDetails)
  {
    return this._http.post(this.baseUrl+'/userContactInformation',JSON.stringify(userContactDetails),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  updateUserContactDetails(userContactDetails:UserContactDetails)
  {
    return this._http.put(this.baseUrl+'/userContactInformation',JSON.stringify(userContactDetails),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }


  errorHandler(error:Response)
  {
   return Observable.throw(error||"SERVER ERROR");
  }

  setter(userContactDetails:UserContactDetails)
  {
   this.userContactDetails=userContactDetails;
  }
  getter()
  {
    return this.userContactDetails;
  }
}
