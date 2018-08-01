import { Component, OnInit } from '@angular/core';
import { UserPaymentMethodService } from '../../services/user-payment-method.service';
import { LoginService } from '../../services/login.service';
import { UserPaymentMethod } from '../../classes/user-payment-method';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-bank-details',
  templateUrl: './view-bank-details.component.html',
  styleUrls: ['./view-bank-details.component.css']
})
export class ViewBankDetailsComponent implements OnInit {

  private UID;
  private userPaymentMethod:UserPaymentMethod[];
  private statement = false;

  constructor(public toastr:ToastrService,private _userPaymentMethod:UserPaymentMethodService,private _login:LoginService) { }

  ngOnInit() {
    this.UID = this._login.getLoggedInUserID();

    this._userPaymentMethod.getUserPaymentMethods().subscribe((userPaymentMethods)=>
  {
    this.userPaymentMethod = userPaymentMethods;
    console.log("***",this.userPaymentMethod);
  });
  }
  getStatement()
  {
    if(this.userPaymentMethod != undefined)
    {
      var state;
      var UID = this.UID;

      this.userPaymentMethod.forEach(function(value)
    {
        if(UID == value.user_Id)
        {
          state = true;
        }
      });
        return this.statement = state;
     
    }
    else
    {
     
      return this.statement = false;
    }
  }
  remove(userPaymentMethod)
  {
    this._userPaymentMethod.deleteUserPaymentMethod(userPaymentMethod.userPaymentMethod_Id).subscribe((payment)=>
  {
    this.userPaymentMethod.splice(this.userPaymentMethod.indexOf(userPaymentMethod.userPaymentMethod_Id),1);
    //alert("Card information was removed successfully");
    this.toastr.success("Card information was removed successfully","Success");
  
  },(error)=>
  {
    console.log(error);
  }
);
  }



}
