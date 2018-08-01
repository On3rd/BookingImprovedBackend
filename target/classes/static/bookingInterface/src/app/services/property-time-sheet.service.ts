import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {PropertyTimeSheet} from '../../app/classes/property-time-sheet';



@Injectable()
export class PropertyTimeSheetService {

  private baseUrl : string = 'http://localhost:8080/api';
  private header = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.header});
  private propertyTimeSheet = new PropertyTimeSheet();
  private propertyID:number;
  private propertyName:string;
  constructor(private _http:Http) { }

  getPropertyTimeSheets()
  {
     return this._http.get(this.baseUrl+'/propertyTimeSheet',this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
  }

  getPropertyTimeSheet(id:number)
  {
     return this._http.get(this.baseUrl+'/propertyTimeSheet/'+id,this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
  }

   deletePropertyTimeSheet(id:number)
    {
     return this._http.delete(this.baseUrl+'/propertyTimeSheet/'+id,this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }
   createPropertyTimeSheet(propertyTimeSheet:PropertyTimeSheet)
   {
     return this._http.post(this.baseUrl+'/propertyTimeSheet',JSON.stringify(propertyTimeSheet),this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }
   updatePropertyTimeSheet(propertyTimeSheet:PropertyTimeSheet)
   {
     return this._http.put(this.baseUrl+'/propertyTimeSheet',JSON.stringify(propertyTimeSheet),this.options).map((response:Response)=>response.json())
     .catch(this.errorHandler);
   }
   viewAvailability(prod_id)
   {
    return this._http.get(this.baseUrl+'/viewAvailability/'+prod_id,this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  
   }

   setDisplayPropertyId(propID:number,propertyName:string)
   {
    localStorage.setItem('displayPropertyId',JSON.stringify({propertyId:propID,propertyName:propertyName}));
  }


  getDisplayPropertyId()
  {
    var propertyID= JSON.parse(localStorage.getItem('displayPropertyId'))
    if(propertyID == null)
    {
      return null;
    }
    else{
    
    return this.propertyID = propertyID.propertyId;
 
    }
  }

   setPropertyId(propID:number,propertyName:string)
   {
    localStorage.setItem('propertyID',JSON.stringify({propertyId:propID,propertyName:propertyName}));
  }

  getPropertyName()
  {
    var propertyName= JSON.parse(localStorage.getItem('propertyID'))
    if(propertyName == null)
    {
      return null;
    }
    else{
    
    return this.propertyName = propertyName.propertyName;
 
    }
  }
  getPropertyId()
  {
    var propertyID= JSON.parse(localStorage.getItem('propertyID'))
    if(propertyID == null)
    {
      return null;
    }
    else{
    
    return this.propertyID = propertyID.propertyId;
 
    }
  }
   errorHandler(error:Response)
   {
    return Observable.throw(error||"SERVER ERROR");
   }

   setter(propertyTimeSheet:PropertyTimeSheet)
   {
    this.propertyTimeSheet=propertyTimeSheet;
   }
   getter()
   {
     return this.propertyTimeSheet;
   }
}
