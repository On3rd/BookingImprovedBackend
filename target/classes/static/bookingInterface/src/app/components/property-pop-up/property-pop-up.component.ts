import { Component, OnInit } from '@angular/core';
import { Property } from '../../classes/property';
import { PropertyService } from '../../services/property.service';
import { LoginService } from '../../services/login.service';
import { PropertyMapService } from '../../services/property-map.service';
import { ToastrService } from 'ngx-toastr';
import {PropertyTimeSheetService} from '../../services/property-time-sheet.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-property-pop-up',
  templateUrl: './property-pop-up.component.html',
  styleUrls: ['./property-pop-up.component.css']
})
export class PropertyPopUpComponent implements OnInit {

  private properties:Property[];
  private property: Property;
  private PID;
  private statement = false;

  constructor(private toastr:ToastrService,private _propertyService:PropertyService,private _router:Router,private _PropertyTimeSheet:PropertyTimeSheetService)
  {
      this._propertyService.getProperties().subscribe(property=>
      {
        console.log("Property for display",property);
        this.properties=property;

      });
      this.PID = this._PropertyTimeSheet.getPropertyId();

  }

  ngOnInit() {

  }

  getStatement()
  {
    if(this.properties != undefined)
    {
      var state;
      var PID = this.PID;

      this.properties.forEach(function(value)
    {
        if(PID == value.prop_Id)
        {
          state = true;
        }
      });
        return this.statement = state;
     
    }
    else
    {
     
      return this.statement = false;
    }
  }

  remove(prop)
  {
    this._propertyService.deleteProperty(prop.prop_Id).subscribe((data)=>{
      this.properties.splice(this.properties.indexOf(this.property),1);
     //alert("Property successfully removed");
     this._router.navigate(['home']);
     this.toastr.success("Property successfully removed","Success");
     
    });
  }

}
