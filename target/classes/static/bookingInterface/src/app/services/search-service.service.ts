import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Property } from '../classes/property';
import { PropertyService } from './property.service';

@Injectable()
export class SearchService {
  private properties:Property[];
  constructor(private http: Http,private _propertyService:PropertyService)
  {

  }
  
  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    var results;
    this._propertyService.getProperties().subscribe(properties =>{
      this.properties = properties;
    });

    this.properties.forEach(property =>
    {
      if(property.city == term)
      {
        results= property.city;
      }
      else
      {
        results = null;
      }
      
    })

    return results;

  }
}
