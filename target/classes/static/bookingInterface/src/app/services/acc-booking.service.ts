import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AccBooking} from '../../app/classes/acc-booking';
import { User } from '../classes/user';

@Injectable()
export class AccBookingService {

  private baseUrl : string = 'http://localhost:8080/api';
  private header = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.header});
  private accBooking = new AccBooking();

  constructor(private _http:Http) { }

  getAccBookings()
   {
     return this._http.get(this.baseUrl+'/accBooking',this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }

   getAccBooking(id:number)
   {
     return this._http.get(this.baseUrl+'/accBooking/'+id,this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }

   deleteAccBooking(id:number)
   {
     return this._http.delete(this.baseUrl+'/accBooking/'+id,this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }
   createAccBooking(accBooking:AccBooking)
   {
     return this._http.post(this.baseUrl+'/accBooking',JSON.stringify(accBooking),this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }
   updateAccBooking(accBooking:AccBooking)
   {
     return this._http.put(this.baseUrl+'/accBooking',JSON.stringify(accBooking),this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }

   viewBookings(user_Id:number)
   {
    return this._http.get(this.baseUrl+'/viewBookings/'+user_Id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
   }
   errorHandler(error:Response)
   {
    return Observable.throw(error||"SERVER ERROR");
   }

   setter(accBooking:AccBooking)
   {
    this.accBooking=accBooking;
   }
   
   getter()
   {
     return this.accBooking;
   }

}

