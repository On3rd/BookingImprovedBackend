import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../../services/user.service';
import {LoginService} from '../../services/login.service';
import {LocalStorageService,SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  username:string;


  constructor(private _router:Router,private _userService:UserService,private _login:LoginService,private _localStorage:LocalStorageService) {
    
     }

  ngOnInit() {
   
    this.username = this._login.getLoggedInUser();
     console.log(this.username)
    }
    logout()
    {
      this._router.navigate(["/"]);
      this._login.logOut();
    }
    homePage()
    {
      this._router.navigate(['/home']);
    }
    viewProfile()
    {
      this._router.navigate(['viewProfile']);
    }
    EditProfile()
    {
      this._router.navigate(['editProfile']);
    }
    ManageBooking()
    {
      this._router.navigate(['manageBooking']);
    }
    
}
