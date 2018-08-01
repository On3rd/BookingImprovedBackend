import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../classes/property';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { LoginService } from '../../services/login.service';
import { SearchUserService } from '../../services/search-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-properties',
  templateUrl: './admin-view-properties.component.html',
  styleUrls: ['./admin-view-properties.component.css']
})
export class AdminViewPropertiesComponent implements OnInit {

  private property:Property[];
  private user:User[];
  private userID;
  constructor(private _router:Router,private _PropertyService:PropertyService,private _userService:UserService,private _login:LoginService,private _searchUserService:SearchUserService) { }

  ngOnInit() {
    this._PropertyService.getProperties().subscribe((property)=>{console.log(property);
      this.property = property;
      //console.log(property);

    },(error)=>{
      console.log(error);
     
    })

    this._userService.getUsers().subscribe((users)=>{console.log(users);
      this.user = users;
    })
    this.userID = this._login.getLoggedInUserID();
  }
 viewProperty(id:number)
 {
  this._searchUserService.setSearchId(id);
  this._router.navigate(['viewProperty']);
 }
 viewManager(id:number)
 {
  this._searchUserService.setSearchId(id);
  this._router.navigate(['searchUser']);
 }
}
