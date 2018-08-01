import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {PropertyService} from '../../services/property.service';
import {Router} from '@angular/router';
import {Property} from '../../classes/property';
import {PropertyMapService} from '../../services/property-map.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  private property:Property[];
  private title:string;
  
  constructor(private _propertyMapService:PropertyMapService,private _login:LoginService,private _PropertyService:PropertyService, private _router:Router) { }

  ngOnInit() {
    this._PropertyService.getProperties().subscribe((property)=>{console.log(property);
      this.property = property;
    
    },(error)=>{
      console.log(error);
     
    })
  }

  searchProperty(search:string)
  {
    var title ="";
    var count = 0;
    this.property.forEach(function(value){
      if(value.city == search)
      {
        title = search;
        count = 1;
      }else
         if(value.prop_name == search)
         {
            title = search;
            count = 1;
          }
          else
          if(value.province == search)
          {
              title = search;
              count = 1;
          }
          else
          if(value.country == search)
          {
              title = search;
              count = 1;
          }
          else
          if(value.prop_type == search)
          {
              title = search;
              count = 1;
          }
          else
          {
           // alert("No results.");
            this.toastr.info("No results.","Search")
          }
    });
   
    if(count == 1)
    {
    this._propertyMapService.setTitle(title);
    this.title = this._propertyMapService.getTitle();
    console.log(this.title);
    this._router.navigate(['searchProperty']);
    }
    else
    {
      this._router.navigate(['home']);
      count =0;
    }
  }
}
