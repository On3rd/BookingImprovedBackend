import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserContactDetails } from '../../classes/user-contact-details';
import { UserPaymentMethod } from '../../classes/user-payment-method';
import { User } from '../../classes/user';
import { UserContactDetailsService } from '../../services/user-contact-details.service';
import { UserPaymentMethodService } from '../../services/user-payment-method.service';
import { UserService } from '../../services/user.service';
import { SearchUserService } from '../../services/search-user.service';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  private username;
  private UID = null;
  private userContactDetails:UserContactDetails[];
  private userPaymentMethods:UserPaymentMethod[];
  private user:User[];
  private CurrentUID;
  constructor(private _router:Router,private _login:LoginService,private _userContactDetails:UserContactDetailsService,private _userPaymentMethodService:UserPaymentMethodService,private _userService:UserService,private _searchUserService:SearchUserService) { }

  
  
  
  ngOnInit() {
    this.username = this._login.getLoggedInUser();
    this.UID = this._searchUserService.getSearchId();
    this.CurrentUID = this._login.getLoggedInUserID();
    console.log("$$$$$$$USER",this.UID);

    
    this.user = this._userService.getUserResult();
  console.log("VIEW USER +++",this.user);

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

  home()
  {
    this._router.navigate(['home']);
  }

  ManageBooking()
  {
    this._router.navigate(['manageBooking']);
  }

  viewProfile()
  {
    this._router.navigate(['viewProfile']);
  }

  logout()
  {
    this._login.logOut();
  }

  EditProfile()
  {
    this._router.navigate(['editProfile']);
  }
  
  exit()
  {
    this._router.navigate(['home'])
  }

}
