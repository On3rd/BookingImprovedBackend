import { Component, OnInit } from '@angular/core';
import {PropertyMapService} from '../../services/property-map.service';
import {PropertyTimeSheet} from '../../classes/property-time-sheet';
import { PropertyTimeSheetService } from '../../services/property-time-sheet.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-availability',
  templateUrl: './view-availability.component.html',
  styleUrls: ['./view-availability.component.css']
})
export class ViewAvailabilityComponent implements OnInit {

  constructor(private _router:Router){}
  ngOnInit() {
     }
     checkAvailability()
     {
      this._router.navigate(['viewAvailability']);
     }

}
