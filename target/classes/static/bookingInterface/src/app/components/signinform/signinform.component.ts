import { Component, OnInit ,ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../classes/user';
import { forEach } from '@angular/router/src/utils/collection';
import {LoginService} from '../../services/login.service';
import { CookieService } from 'angular2-cookie/core';
import {LocalStorageService,SessionStorageService} from 'ngx-webstorage';
import { ToasterService } from '../../services/toaster.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signinform',
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.css']
})
export class SigninformComponent implements OnInit {
  private user:User[];
 
  constructor(public toastr:ToastrService,private _userService:UserService, private _router:Router,private _login:LoginService,private _cookieService: CookieService,private _localStorage:LocalStorageService,private _sessionStorage:SessionStorageService) {

   }

  ngOnInit() {
    this._userService.getUsers().subscribe((users)=>{console.log(users);
      this.user = users;
    });
  }
    login(email:string,password:string)
    {
        var uname;
        var usurname;
        var phoneNo;
        var user_id;
     var counter:number = 0;
     
     if(this.user != null){
      this.user.forEach(function(value){
      if(value.email == email && value.password == password)
        {
          user_id = value.user_Id;
        uname = value.name;
        usurname = value.surname;
       phoneNo = value.phoneNo;
        
        console.log("Welcome!");
        counter++;
          console.log(user_id,email, password , counter,phoneNo);
       
      }
      });
   
       if(counter>=1)
       {
        
        var key = btoa(email) + '??' +btoa(password);
        //this._cookieService.put('sessionID',key);
        //this._localStorage.store('currentUser',JSON.stringify({name:uname,surname:usurname,email:email,phoneNumber:phoneNo}));
        this._login.setLogin(user_id,uname,usurname,email,phoneNo,null,null);
        this._userService.setUserLoggedIn();
        this._router.navigate(['/home']);
        console.log(this._login.getLoggedInUser());
       
        counter =0;
       } else
       {
       //alert("Incorrect inputs");
       this.toastr.error("Incorrect inputs","Error");
         
       }
      }else
      {
       // alert("Data Not Available... Make Sure You Registered Before Loggin In");
        this.toastr.error("Data Not Available... Make Sure You Registered Before Loggin In","Error");
      
      }
    
    }

   
   
  }


