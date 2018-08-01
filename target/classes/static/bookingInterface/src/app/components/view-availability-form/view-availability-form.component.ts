import { Component, OnInit } from '@angular/core';
import { PropertyTimeSheetService } from '../../services/property-time-sheet.service';
import { PropertyMapService } from '../../services/property-map.service';
import { PropertyTimeSheet } from '../../classes/property-time-sheet';
import { SearchUserService } from '../../services/search-user.service';
import { DisplayPropertiesServiceService } from '../../services/display-properties-service.service';
import { Property } from '../../classes/property';

@Component({
  selector: 'app-view-availability-form',
  templateUrl: './view-availability-form.component.html',
  styleUrls: ['./view-availability-form.component.css']
})
export class ViewAvailabilityFormComponent implements OnInit {

  private timeSheets:PropertyTimeSheet;
  private prodId:number;
  private localProperty;
  private property:Property[];
  constructor(private _displayPropertiesService:DisplayPropertiesServiceService,private _searchUserService:SearchUserService,private _propertyTimeSheetService:PropertyTimeSheetService, private _propertyMapService:PropertyMapService ) { }

  ngOnInit() {

   
   
    this.property = this._displayPropertiesService.getSearchResults();
    console.log("The Property ID",this.property);

    this.property.forEach(element => {
      this.viewAvailabity(element.prop_Id);
    });

  }

  viewAvailabity(id)
  {
    this._propertyTimeSheetService.viewAvailability(id).subscribe(timeslots=>
    {
      this.timeSheets = timeslots;
    })
   
  }

}
