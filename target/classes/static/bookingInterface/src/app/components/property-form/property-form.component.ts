import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent implements OnInit {

  private username:string;

  constructor(private _login:LoginService,private _router:Router) { }

  ngOnInit() {
    this.username=this._login.getLoggedInUser();
  }
  EditProfile()
  {
    this._router.navigate(['editProfile']);
  }
  ManageBooking()
  {
    this._router.navigate(['manageBooking']);
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
    this._login.logOut();
  }

}
