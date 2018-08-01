import { Component, OnInit } from '@angular/core';
import {PropertyTimeSheetService} from '../../services/property-time-sheet.service';
import {PropertyTimeSheet} from '../../classes/property-time-sheet';
import { LoginService } from '../../services/login.service';
import { PropertyMapService } from '../../services/property-map.service';

@Component({
  selector: 'app-check-in-check-out',
  templateUrl: './check-in-check-out.component.html',
  styleUrls: ['./check-in-check-out.component.css']
})
export class CheckInCheckOutComponent implements OnInit {
   private userID;
  private propID;
  private timeSlots:PropertyTimeSheet[];
  private date;
  constructor(private _propertyTimeSheetService:PropertyTimeSheetService,private _login:LoginService,private _propertyMapService:PropertyMapService) {
    
   }

  ngOnInit() {
    this.userID = this._login.getLoggedInUserID();
    this.propID = this._propertyMapService.getPropID();
    
    this._propertyTimeSheetService.getPropertyTimeSheets().subscribe((timeslots)=>
  {
    this.timeSlots = timeslots;
    console.log("Timeslots ",this.timeSlots);
  })

    this.date = this.currentDate();
  }

   currentDate()
   {
     var date = new Date();
     return date.getFullYear() +'/'+ date.getMonth() + '/' + date.getDay() ;
   }
  checkAvailability(checkIn:Date,checkOut:Date)
  {

    console.log("Availability Checked");
  }
}
