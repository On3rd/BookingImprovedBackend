import { Component, OnInit } from '@angular/core';
import { UserContactDetails } from '../../classes/user-contact-details';
import { UserContactDetailsService } from '../../services/user-contact-details.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-contact-details',
  templateUrl: './user-contact-details.component.html',
  styleUrls: ['./user-contact-details.component.css']
})
export class UserContactDetailsComponent implements OnInit {

  private userContactDetails:UserContactDetails;
  private UID;
  userContactForm:FormGroup;
  constructor(public toastr:ToastrService,private _formBuilder:FormBuilder,private _router:Router,private _userContactDetailsService:UserContactDetailsService,private _login:LoginService) { }

  ngOnInit() {
    this.UID = this._login.getLoggedInUserID();
    this.userContactDetails = this._userContactDetailsService.getter();

    this.userContactForm = this._formBuilder.group({
      "streetAddress":new FormControl('',[Validators.maxLength(100),Validators.required]),
      "addressline2":new FormControl('',[Validators.maxLength(100),Validators.required]),
      "city" : new FormControl('',[Validators.maxLength(100),Validators.required]),
      "province" :new FormControl('',[Validators.maxLength(100),Validators.required])
      ,"country" :new FormControl('',[Validators.maxLength(100),Validators.required])
      ,"postal_code" :new FormControl('',[Validators.maxLength(100),Validators.required])
   
    })
  }
  processForm(city:string,streetAddress:string,addressline2:string,province:string,country:string,postalCode:string)
  {
    if(city==null||streetAddress==null||addressline2==null||province ==null||country == null ||postalCode == null)
    {
      //alert("Invalid inputs");
      this.toastr.info("Invalid inputs","Warning");
    
    }
    else
    {
      this.userContactDetails.user_Id = this.UID;

      this._userContactDetailsService.createUserContactDetails(this.userContactDetails).subscribe((userContactDetails) =>
    {
      console.log("your contact details",userContactDetails);
      //alert("Contact details added successfully");
      
      this._router.navigate(['viewProfile']);
      this.toastr.success("Contact details added successfully","Success");
    
    });

    }
  }

}
