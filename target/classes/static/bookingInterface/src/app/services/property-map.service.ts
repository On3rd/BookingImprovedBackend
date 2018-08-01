import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {PropertyMaps} from '../../app/classes/property-maps';

@Injectable()
export class PropertyMapService {
  private baseUrl : string = 'http://localhost:8080/api';
  private header = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.header});
  
  private prop_name:string;
  private province:string;
  private city:string;
  private title:string;
  private propId:number;
  private rooms:number = 0;
  private counter = 0;
  private results = 0;

  constructor(private _http:Http) {
     
  }

  

  setCounter(n)
  {
    this.counter = n;
  }
  getCounter()
  {
    return this.counter;
  }
  setRooms(rooms:number)
  {
    this.rooms = rooms;
  }
  setResults(i:number)
  { 
    this.results = i;
  }
  getResults()
  {
    return this.results;
  }
  getRooms()
  {
    return this.rooms;
  }
  setTitle(title:string)
  {
    this.title = title;
  }
  getTitle()
  {
    return this.title;
  }
  setPropName(prop_name:string)
  {
    this.prop_name = prop_name;
  }
  setPropID(propId:number)
  {
    this.propId = propId;
  }
  getPropID()
  {
return this.propId;
  }
  getPropName()
  {
    return this.prop_name;
  }

  setProvince(province:string)
  {
    this.province = province;
  }
  getProvince()
  {
    return this.province;
  }

  setCity(city:string)
  {
    this.city = city;
  }
  getCity()
  {
    return this.city;
  }


}
