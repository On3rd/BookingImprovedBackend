import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { LoginService } from '../../services/login.service';
import { Property } from '../../classes/property';
@Component({
  selector: 'app-manage-property',
  templateUrl: './manage-property.component.html',
  styleUrls: ['./manage-property.component.css']
})
export class ManagePropertyComponent implements OnInit {

  private userID;

  private statement =false ;
 
  constructor(private _router:Router, private _propertyService:PropertyService,private _login:LoginService) {
   
 
   }

  ngOnInit() {

    this.userID = this._login.getLoggedInUserID();
    
    
  
  this._propertyService.checkOwnership(this.userID).subscribe(statement=>
  {
    this.statement = statement;
  });
   
  }
  
  managePropertyPage()
  {
    this._router.navigate(['/manageProperty']);
  }

  
}
