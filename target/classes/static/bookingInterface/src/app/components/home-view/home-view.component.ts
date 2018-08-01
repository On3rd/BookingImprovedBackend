import { Component, OnInit ,Input} from '@angular/core';
import {Router} from '@angular/router';
import {Property} from '../../classes/property';

import {PropertyMapService} from '../../services/property-map.service';


import {PropertyMaps} from '../../classes/property-maps';

import {PropertyService} from '../../services/property.service';

import {DispProperty} from '../../classes/disp-property';

import {DisplayPropertiesServiceService} from '../../services/display-properties-service.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  
  private dispProperty:DispProperty[];
  private property:Property[];
  public display;
  private city2:String;
  private price:number;
  private averagePrice:number;
  private numberOfProperies:number =0;

  constructor(private _PropertyService:PropertyService, private _router:Router,private _propertyMapService:PropertyMapService ,private _displayPropertiesService:DisplayPropertiesServiceService) {

   }

  ngOnInit() {
     this.price=0;
  this.averagePrice =0;
  this.numberOfProperies = 0;

    this._PropertyService.getProperties().subscribe((property)=>{console.log(property);
      this.property = property;
      //console.log(property);

    },(error)=>{
      console.log(error);
     
    });

    this._displayPropertiesService.getDisplayProperties().subscribe((dispProperties)=>{console.log(dispProperties);
      this.dispProperty = dispProperties;
    },(error)=>{
      console.log(error);
     
    });
  }

  setNumberOfProperies()
  {
    this.numberOfProperies++;
    //console.log(this.numberOfProperies);
  }

  getNumberOfProperies()
  {
    return this.numberOfProperies;
  }

  setAveragePrice(averagePrice:number)
  {
    this.averagePrice = (this.averagePrice + averagePrice)/this.getNumberOfProperies();
    //console.log(this.averagePrice);
  }

  getAveragePrice()
  {
    return this.averagePrice;
  }

  resetNoOfProperties()
  {
    return this.numberOfProperies = 0;
  }
  resetAvarage()
  {
    return this.averagePrice = 0;
  }
  
  viewProperty(title:string)
  {
    this._PropertyService.displayProperty(title).subscribe(display=>
    {
      this.display = display;
      this._displayPropertiesService.setSearchResults(display);
      //console.log(this.display);
      this._router.navigate(['displayProperties']);
    });
   
    
    
  }

}
