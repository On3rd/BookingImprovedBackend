import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listpropertybutton',
  templateUrl: './listpropertybutton.component.html',
  styleUrls: ['./listpropertybutton.component.css']
})
export class ListpropertybuttonComponent implements OnInit {

  constructor( private _router:Router) { }

  ngOnInit() {
  }

  addPropertyPage()
  {
    this._router.navigate(['/addProperty']);
  }

}
