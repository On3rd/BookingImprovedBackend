import { Component, OnInit } from '@angular/core';
import { UserPaymentMethod } from '../../classes/user-payment-method';
import { UserPaymentMethodService } from '../../services/user-payment-method.service';
import {LoginService} from '../../services/login.service';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-payment-method',
  templateUrl: './user-payment-method.component.html',
  styleUrls: ['./user-payment-method.component.css']
})
export class UserPaymentMethodComponent implements OnInit {

  private userPaymentMethod:UserPaymentMethod;
  private UID;
  private userPaymentMethods:UserPaymentMethod[];
  bankDetails:FormGroup;
  constructor(private toastr:ToastrService,private _formBuilder:FormBuilder,private _router:Router,private _userPaymentMethodService:UserPaymentMethodService,private _login:LoginService) { 

  }

  ngOnInit() {
  this.userPaymentMethod = this._userPaymentMethodService.getter();
    this.UID = this._login.getLoggedInUserID();
    this._userPaymentMethodService.getUserPaymentMethods().subscribe((payment)=>
  {
      this.userPaymentMethods = payment;
  });
  this.bankDetails = this._formBuilder.group({
    "cardType":new FormControl('',[Validators.required]),
    "card_number":new FormControl('',[Validators.minLength(16),Validators.maxLength(16),Validators.required]),
    "Expiry_Date" : new FormControl('',[Validators.required]),
    "Security_Code" :new FormControl('',[Validators.maxLength(15),Validators.required])
    
  });
  console.log("DEFINED USER ID", this.UID);
  }

  processForm(card_type:string,card_number:string,expiry_date:string,security_code:string)
  {
    this.userPaymentMethod.expiry_date = new Date(expiry_date);
         if(card_type == null || card_number == null|| expiry_date ==null || security_code == null)
        {
         // alert("Invalid Inputs");
          this.toastr.info("Invalid Inputs","warning");
    
        }
        else{

          
          this.userPaymentMethod.user_Id = this.UID;
          
          this.userPaymentMethods.forEach(methods=>
          {
              if(this.UID == methods.user_Id)
              {
                this.userPaymentMethod.userPaymentMethod_Id = methods.userPaymentMethod_Id;
              }
          });

            if(this.userPaymentMethod.user_Id == undefined)
            {
              
              this._userPaymentMethodService.createUserPaymentMethod(this.userPaymentMethod).subscribe((payment)=>
              {
                console.log("Your Updated Payment methods", payment);
                //alert("Payment Method Successfully Added");
                
                this._router.navigate(['viewProfile']);
                this.toastr.success("Payment Method Successfully Added","Success");
    
              });
  
            } else
            {
              this._userPaymentMethodService.updateUserPaymentMethod(this.userPaymentMethod).subscribe((payment)=>
              {
                console.log("Your Updated Payment methods", payment);
                //alert("Payment Method Successfully Update");
               
                this._router.navigate(['viewProfile']);
                this.toastr.success("Payment Method Successfully Update","Success");
    
              });
            
            }
         
         
        }
  }
}
