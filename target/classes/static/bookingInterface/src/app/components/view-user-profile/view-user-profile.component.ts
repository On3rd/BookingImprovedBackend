import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserContactDetails } from '../../classes/user-contact-details';
import { UserPaymentMethod } from '../../classes/user-payment-method';
import { User } from '../../classes/user';
import { UserContactDetailsService } from '../../services/user-contact-details.service';
import { UserPaymentMethodService } from '../../services/user-payment-method.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-view-user-profile',
  templateUrl: './view-user-profile.component.html',
  styleUrls: ['./view-user-profile.component.css']
})
export class ViewUserProfileComponent implements OnInit {

  private username;
  private UID;
  private userContactDetails:UserContactDetails[];
  private userPaymentMethods:UserPaymentMethod[];
  private user:User[];


  constructor(private _router:Router,private _login:LoginService,private _userContactDetails:UserContactDetailsService,private _userPaymentMethodService:UserPaymentMethodService,private _userService:UserService) { }

  ngOnInit() {
    this.username = this._login.getLoggedInUser();
    this.UID = this._login.getLoggedInUserID();

    this._userService.getUsers().subscribe((users)=>
  {
    console.log("Users##",users);
    this.user = users;
  });

    this._userPaymentMethodService.getUserPaymentMethods().subscribe((paymentMethods) =>
  {
    console.log("Payment methods",paymentMethods);
    this.userPaymentMethods = paymentMethods;
  });
  this._userContactDetails.getUserContactDetails().subscribe((userContactDetails)=>
  {
  console.log("Contact Details@@",userContactDetails);
  this.userContactDetails = userContactDetails;
  });
  
  }
  exit()
  {
    this._router.navigate(['home']);

  }

  
ManageBooking()
{
  this._router.navigate(['manageBooking']);
}
home()
{
  this._router.navigate(['home']);
}
  viewProfile()
  {
    this._router.navigate(['viewProfile']);

  }
  EditProfile()
  {
    this._router.navigate(['editProfile']);
  }
  logout()
  {
    this._login.logOut();
  }
}
