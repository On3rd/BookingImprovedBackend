import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';
import {LoginService} from '../../services/login.service';
import {LoggedUserComponent} from '../../components/logged-user/logged-user.component';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { ToastrService } from 'ngx-toastr';
//import {LoggedInDetails} from '../../logged-in-details';


@Component({
  selector: 'app-admin-sign-in-form',
  templateUrl: './admin-sign-in-form.component.html',
  styleUrls: ['./admin-sign-in-form.component.css']
})
export class AdminSignInFormComponent implements OnInit {
  private user:User[];

  constructor(public toastr: ToastrService,private _userService:UserService, private _router:Router,private _login:LoginService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe((users)=>{console.log("Availability Users++",users);
      this.user = users;
    
    },(error)=>{
      console.log(error);
     
    })
  }

  login(email:string,password:string,stuffno:string)
    {
     
      this._login.login(email,password)
   
    }

}


