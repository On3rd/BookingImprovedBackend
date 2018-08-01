import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { SearchUserService } from '../../services/search-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-users',
  templateUrl: './admin-view-users.component.html',
  styleUrls: ['./admin-view-users.component.css']
})
export class AdminViewUsersComponent implements OnInit {

  private user:User[]
  constructor(private _userService:UserService,private _searchUserService:SearchUserService,private _router:Router) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users)=>{console.log(users);
      this.user = users;
    })
  }
  viewUser(user_Id)
  {
    this._searchUserService.setSearchId(user_Id);
    this._router.navigate(['searchUser']);
  }

}
