import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

import {FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  private user:User;
  private UID;
  private changePass;
  private username;
  private users:User[];

  private count;
  private count2;
  private editProfileForm:FormGroup;
  private changePasswordForm:FormGroup;
  private emailPattern =
  '^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}$';
private passwordPattern =
  '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&].{7,}';
  constructor(public toastr:ToastrService,private _formBuilder:FormBuilder,private _router:Router,private _userService:UserService,private _login:LoginService) { }

  ngOnInit() {
    this.user = this._userService.getter();
    this.UID = this._login.getLoggedInUserID();
    this.changePass =false;
    this.username = this._login.getLoggedInUser();
    this._userService.getUsers().subscribe((users)=>
    {
      this.users = users;
    });
    this.count = 0;
    this.count2 = 0;

    this.editProfileForm = this._formBuilder.group({
      "name":new FormControl('',[Validators.maxLength(100),Validators.required]),
      "surname":new FormControl('',[Validators.maxLength(100),Validators.required]),
      "email" : new FormControl('',[Validators.maxLength(100),Validators.required,Validators.pattern(this.emailPattern)]),
      "phonenumber" :new FormControl('',[Validators.maxLength(100),Validators.required])
      ,"psword" :new FormControl('',[Validators.maxLength(100),Validators.required,Validators.pattern(this.passwordPattern)])
     
    });

    this.changePasswordForm = this._formBuilder.group({
      "currentpword" :new FormControl('',[Validators.maxLength(100),Validators.required,Validators.pattern(this.passwordPattern)])
      ,"newpword" :new FormControl('',[Validators.maxLength(100),Validators.required,Validators.pattern(this.passwordPattern)])
      ,"confpword" :new FormControl('',[Validators.maxLength(100),Validators.required,Validators.pattern(this.passwordPattern)])
   
    });
  }
  manageBooking()
  {
    this._router.navigate(['manageBooking']);
  }
  viewProfile()
  {
    this._router.navigate(['viewProfile']);
  }
  home()
  {
    this._router.navigate(['home']);
  }
  logout()
  {
    this._login.logOut();
  }
  editProfile(name:string,surname:string,email:string,phoneNo:string,password:string)
  {
    

    this.user.user_Id = this.UID;
    if(name==null ||surname == null || email==null ||phoneNo==null ||password ==null )
    {

    }
    else
    {

    
    this.users.forEach(users=>
    {
        if(this.UID == users.user_Id)
        {
          
          this.user.stuffNo = users.stuffNo;
          
        };
        if(email == users.email && password  == users.password)
        {
          this.user.password = users.password;
          this.user.email = users.email;
          if(this.user.user_Id == undefined)
    {
     // alert("Update failed");
      this.toastr.error("Update failed.","Error");
    
    }else
    {
      this._userService.updateUser(this.user).subscribe((updatedUser)=>
    {
      this._login.setLogin(this.user.user_Id,this.user.name,this.user.surname,this.user.email,this.user.phoneNo,null,null);
      console.log("UPDATED USER###",updatedUser);
      //alert("User update successful");
      this.toastr.success("User update successful","Success");
    
      this._router.navigate(['viewProfile']);
     
       
    });
    };
    this.count = 1;
        }
        
    });

    if(this.count == 0)
    {
     
          //alert("Check your email and password");
          this.toastr.error("Check your email and password","Error");
    
        };
      }
    
  }
  changePassword(currentPassword:string,newPassword:string,confPassword:string)
  {
    if(newPassword == confPassword)
    {
      if(currentPassword == newPassword)
      {
        //alert("Your current is the same as your old password");
        this.toastr.info("Your current is the same as your old password","Invalid Inputs");
    
      }
      else{
        
        this.users.forEach(value=>
          {
            if(currentPassword == value.password)
            {
              
              this.user.password = newPassword;
              this.user.user_Id = this.UID;
              this.user.email = value.email;
              this.user.name = value.name;
              this.user.stuffNo = value.stuffNo;
              this.user.phoneNo = value.phoneNo;
              this.user.surname = value.surname;

              if(this.user.user_Id !=undefined)
              {
                this._userService.updateUser(this.user).subscribe((newpass)=>
              {
                console.log("NEW PASSWORD###",newpass)
              });
               // alert("Password changed successfully");
                this.toastr.success("Password changed successfully","Success");
    
                this._router.navigate(['viewProfile']);
            }
            this.count2 = 1;
          }
            
          });

          if(this.count2 == 0)
          {
           // alert("Incorrect password");
            this.toastr.error("Incorrect password","invalid Inputs");
    
          };
      }

    }else{
      this.toastr.info("Confirm your current password","invalid Inputs");
    }
  }
  getChangePassword()
  {
   return this.changePass;
  }

  setChangePassword(changePass)
  {
    this.changePass  = changePass;
  }

}
