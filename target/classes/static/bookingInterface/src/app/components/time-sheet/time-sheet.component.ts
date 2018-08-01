import { Component, OnInit } from '@angular/core';
import {PropertyTimeSheetService} from '../../services/property-time-sheet.service';
import { PropertyTimeSheet } from '../../classes/property-time-sheet';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.css']
})
export class TimeSheetComponent implements OnInit {
  private timeSheet:PropertyTimeSheet[];
  private propId;
  private localProperty;
private availableDays;
private days;
  constructor(public toastr:ToastrService,private _propertyTimeSheetService:PropertyTimeSheetService) { }

  ngOnInit() {
    this._propertyTimeSheetService.getPropertyTimeSheets().subscribe((timeSheets)=>{console.log("###",timeSheets);
      this.timeSheet = timeSheets;
    })
    this.localProperty = this._propertyTimeSheetService.getPropertyId();
     this.propId = this.localProperty;
   
  }

  removeDate(date)
  {
    this._propertyTimeSheetService.deletePropertyTimeSheet(date.propTimeSheetId).subscribe((data) =>{
      this.timeSheet.splice(this.timeSheet.indexOf(date),1);
    })
    // alert("The date was removed");
     
     
    location.reload();
    this.toastr.success("The date was removed","Success");
    

  }

}
