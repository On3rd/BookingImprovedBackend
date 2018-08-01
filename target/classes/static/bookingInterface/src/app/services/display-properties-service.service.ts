
import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {DispProperty} from  '../../app/classes/disp-property';


@Injectable()
export class DisplayPropertiesServiceService {

  private baseUrl : string = 'http://localhost:8080/api';
  private header = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.header});
  private dispProperty = new DispProperty();
  private searchRusults;
 
  constructor(private _http:Http) {

  }

  getDisplayProperties()
  {
    return this._http.get(this.baseUrl+'/displayProperties',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  
  getDisplayProperty(id:number)
  {
    return this._http.get(this.baseUrl+'/displayProperties/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  deleteDisplayProperties(id:number)
  {
    return this._http.delete(this.baseUrl+'/displayProperties/'+id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  
  createDisplayProperties(dispProperty:DispProperty)
  {
    return this._http.post(this.baseUrl+'/displayProperties',JSON.stringify(dispProperty),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  updateDisplayProperties(dispProperty:DispProperty)
  {
    return this._http.put(this.baseUrl+'/displayProperties',JSON.stringify(dispProperty),this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }
  
  setSearchResults(search)
  {
    this.searchRusults = search;
  }
  getSearchResults()
  {
    return this.searchRusults;
  }
  errorHandler(error:Response)
  {
   return Observable.throw(error||"SERVER ERROR");
  }

  setter(dispProperty:DispProperty)
  {
   this.dispProperty=dispProperty;
  }
  getter()
  {
    return this.dispProperty;
  }
}
