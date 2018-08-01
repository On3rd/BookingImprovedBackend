import { Component, OnInit } from '@angular/core';
import { UserPaymentMethod } from '../../classes/user-payment-method';
import { UserPaymentMethodService } from '../../services/user-payment-method.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  private userPaymentMethod:UserPaymentMethod;
  private userPayMeth:UserPaymentMethod[];
  private UID;
  private bankDetails:FormGroup;
  constructor(private _formBuilder:FormBuilder,public toastr:ToastrService,private _router:Router,private _userPaymentMethodService:UserPaymentMethodService,private _login:LoginService) { 

  }

  ngOnInit() {
  
  this.userPaymentMethod = this._userPaymentMethodService.getter();
    this.UID = this._login.getLoggedInUserID();
    this._userPaymentMethodService.getUserPaymentMethods().subscribe(paymeth=>{
      this.userPayMeth = paymeth;
      console.log(this.userPayMeth);
    });

    this.bankDetails = this._formBuilder.group({
      "cardType":new FormControl('',[Validators.required]),
      "card_number":new FormControl('',[Validators.minLength(16),Validators.maxLength(16),Validators.required]),
      "Expiry_Date" : new FormControl('',[Validators.required]),
      "Security_Code" :new FormControl('',[Validators.required])
      
    
    
    });
  }

  processForm(remember,card_type:string,card_number:string,expiry_date:string,security_code:string)
  {
    this.userPaymentMethod.user_Id = this.UID;
    this.userPaymentMethod.expiry_date = new Date(expiry_date);
    if(remember)
      {
        if(card_type == null || card_number == null|| expiry_date ==null || security_code == null)
        {
          //alert("Invalid Inputs");
          this.toastr.error("Invalid Inputs","Error");
    
        }
        else{
          
          if(this.userPaymentMethod.userPaymentMethod_Id == undefined && this.userPaymentMethod.user_Id != this.UID)
          {
            
            
            this._userPaymentMethodService.createUserPaymentMethod(this.userPaymentMethod).subscribe((paymentMethod)=>
            {
              console.log("Your Payment methods", paymentMethod);
             // alert("Payment Method Successfully Added");
              
             
                 
              location.reload();
              this.toastr.success("Payment Method Successfully Added","Success");
    

            });
          }else
          {
            this._userPaymentMethodService.updateUserPaymentMethod(this.userPaymentMethod).subscribe((paymentMethod)=>
            {
              console.log("Your Payment methods", paymentMethod);
              //alert("Payment Method Successfully Updated");
              
                
                
             location.reload();
              this.toastr.success("Payment Method Successfully Updated","Success");
    
            });
          }
          
        }
      }
      
  }
  processForms(card_type:string,card_number:string,expiry_date:string,security_code:string)
  {
    this.userPaymentMethod.user_Id = this.UID;
    this.userPaymentMethod.expiry_date = new Date(expiry_date);
        if(card_type == null || card_number == null|| expiry_date ==null || security_code == null)
        {
         // alert("Invalid Inputs");
          this.toastr.error("Invalid Inputs","Error");
    
        }
        else{
         
          if(this.userPaymentMethod.userPaymentMethod_Id == undefined && this.userPaymentMethod.user_Id != this.UID)
          {
            
            this._userPaymentMethodService.createUserPaymentMethod(this.userPaymentMethod).subscribe((paymentMethod)=>
            {
              console.log("Your Payment methods", paymentMethod);
              //alert("Payment Method Successfully Added");
              
             
                location.reload();
                this.toastr.success("Payment Method Successfully Added","Success");
    
            });
          }else
          {
            this._userPaymentMethodService.updateUserPaymentMethod(this.userPaymentMethod).subscribe((paymentMethod)=>
            {
              console.log("Your Updated Payment methods", paymentMethod);
              //alert("Payment Method Successfully Updated");
              
              
                location.reload();
              this.toastr.success("Payment Method Successfully Updated","Success");
    
            });
          }
          
        }
      
      
  }
}
