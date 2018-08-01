import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from '../../app/classes/user';

@Injectable()
export class UserService {

  private baseUrl : string = 'http://localhost:8080/api';
  private header = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.header});
  private user = new User();
  private isUserLoggedIn;
  private username;
  private searchResults;

  constructor(private _http:Http) {
    
    this.isUserLoggedIn = false;
   }

   setUserLoggedIn()
   {
    this.isUserLoggedIn = true;
   }
   
   getUserLoggedIn()
   {
    return this.isUserLoggedIn;
   }
   getUsers()
   {
     return this._http.get(this.baseUrl+'/users',this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }

   getUser(id:number)
   {
     return this._http.get(this.baseUrl+'/users/'+id,this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }

   deleteUser(id:number)
   {
     return this._http.delete(this.baseUrl+'/users/'+id,this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }
   createUser(user:User)
   {
     return this._http.post(this.baseUrl+'/users',JSON.stringify(user),this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }
   updateUser(user:User)
   {
     return this._http.put(this.baseUrl+'/users',JSON.stringify(user),this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }

   searchUser(title)
   {
    return this._http.get(this.baseUrl+"/searchUser/"+title,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
    
   }
   errorHandler(error:Response)
   {
    return Observable.throw(error||"SERVER ERROR");
   }

   setter(user:User)
   {
    this.user=user;
   }

   setUserResult(user)
   {
      this.searchResults = user;
   }

   getUserResult()
   {
     return this.searchResults;
   }
   
   getter()
   {
     return this.user;
   }
}
