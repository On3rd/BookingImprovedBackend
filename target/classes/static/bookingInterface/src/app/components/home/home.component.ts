import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username:string;
  admin :any;
  constructor(private _login:LoginService , private _router:Router) { }

  ngOnInit() {
    this.username = this._login.getLoggedInUser();
   
  }
  ManageBooking()
  {
    this._router.navigate(['manageBooking']);
  }
  EditProfile()
  {
    this._router.navigate(['editProfile']);
  }
  logout()
  {
    this._login.logOut();
  }
  viewProfile()
  {
    this._router.navigate(['viewProfile']);
  }
  home()
  {
    this._router.navigate(['home']);
  }
}
