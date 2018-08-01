import { Component, OnInit,Input } from '@angular/core';
import {DispProperty} from '../../classes/disp-property';
import {Router} from '@angular/router';
import {PropertyMapService} from '../../services/property-map.service';
import {PropertyService} from '../../services/property.service';
import {Property} from '../../classes/property';
import {LoginService} from '../../services/login.service';
//I will change this displayPropertyService to PropertyService
//And Create And Import PropertyService
import {PropertyMaps} from '../../classes/property-maps';

import {DisplayPropertiesServiceService} from '../../services/display-properties-service.service';
import { LocalStorage } from 'ngx-webstorage';
import { PropertyTimeSheetService } from '../../services/property-time-sheet.service';
import { SearchUserService } from '../../services/search-user.service';
@Component({
  selector: 'app-display-properties',
  templateUrl: './display-properties.component.html',
  styleUrls: ['./display-properties.component.css']
})
export class DisplayPropertiesComponent implements OnInit {

  private dispProperty:DispProperty[];
  private propertyName:String;
  private property:Property[];
  private city:string;
  private username:string;
  private admin:any;
  private total;
  private display;
  constructor(private _searchUserService:SearchUserService,private _login:LoginService,private _PropertyService:PropertyService, private _router:Router,private _propertyMapService:PropertyMapService ,private _displayPropertiesService:DisplayPropertiesServiceService,private _PropertyTimeSheet:PropertyTimeSheetService) {
    this.city = this._propertyMapService.getCity();

  }

  ngOnInit() {
    this._displayPropertiesService.getDisplayProperties().subscribe((dispProperties)=>{console.log(dispProperties);
      this.dispProperty = dispProperties;
    },(error)=>{
      console.log(error);
     
    })
    
    this.property = this._displayPropertiesService.getSearchResults();
    this.admin = this._login.getLoggedInUserID();
    this.username = this._login.getLoggedInUser();
  }

  viewPropertyByName(title:string)
  {
    
    this._PropertyService.displayProperty(title).subscribe(display=>
      {
        this.display = display;
        this._displayPropertiesService.setSearchResults(display);
        console.log(this.display);
        this._router.navigate(['viewProperty']);
      });
   
  }
  
  viewProfile()
  {
    this._router.navigate(['viewProfile']);
  }
  home()
  {
    this._router.navigate(['home']);
  } 

  ManageBooking()
  {
    this._router.navigate(['manageBooking']);
  }
  EditProfile()
  {
    this._router.navigate(['editProfile']);
  }
  logout()
  {
    this._login.logOut();
  }
}
