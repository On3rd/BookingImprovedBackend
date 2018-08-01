import { Injectable } from '@angular/core';
import {Navigate} from '../../app/classes/navigate';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/user';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class LoginService {

 
  private _navigate=new Navigate();
  //private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  private username:any = null;
  private username_id:number = null;
  private admin_id:any;
  private paymentMethod = null;
  private user:User[];
  private _user:User;
  private baseUrl : string = 'http://localhost:8080/api';
  private header = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.header});
  private User;
  constructor(private _login:Router,private http:Http,public toastr: ToastrService) {

   }

   login(email,password)
   {
   
    this.http.get(this.baseUrl+"/userlogin/"+email +"/"+ password,this.options).subscribe(loggedInUser=>
    {
      var check = loggedInUser.json();
      if(check == true)
      {
        this.http.get(this.baseUrl+"/loggedUser",this.options).subscribe(user=>
          {
              this.User = user.json();
            console.log("New Login user++", this.User);
            console.log("User role ++", this.User.userRoles.roleNames.role);
           var role = this.User.userRoles.roleNames.role;
           var paymentMethod = this.User.userPaymentMethod;
            this.setLogin(this.User.user_Id,this.User.name,this.User.surname,this.User.email,this.User.phoneNo,role,paymentMethod);
           
              this.toastr.success("Login Successful");
             
             
            
          });
      }else
      {
        this.toastr.error("Login Unsuccessful"); 
      }
      
    });

   }
   

    errorHandler(error:Response)
    {
   return Observable.throw(error||"SERVER ERROR");
  }
  
  




  setLogin(user_id:number,uname:string,usurname:string,uemail:string,phoneNo:string,role:String,paymentMethod)
  {
   
 //   this.loggedInStatus = login;
   localStorage.setItem('currentUser',JSON.stringify({id:user_id,name:uname,surname:usurname,email:uemail,phonenumber:phoneNo,status:true}));
   localStorage.setItem('Role',JSON.stringify({Role:role}));
   localStorage.setItem('paymentMethod',JSON.stringify({PaymentMethod:paymentMethod}))
  }
  
  logOut()
  {
    this._navigate.setLoggedUserButton(false);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('Role');
    localStorage.removeItem('paymentMethod');
    this._login.navigate(['/']);
  }
  
  
 
  getLoggin()
  {
     
    return this._navigate.loggedUserButton;
  }

  getLoggedInUser()
  {
     var username= JSON.parse(localStorage.getItem('currentUser'))
     if(username == null)
     {
       return null;
     }
     else{
      this._navigate.setLoggedUserButton(username.status);
     return this.username = username.name;
  
     }
  }
  getPaymentMethod()
  {
    var paymentMethod = JSON.parse(localStorage.getItem('paymentMethod'));
    if(paymentMethod == null)
     {
       return false;
     }
     else{
     return true;
   
     }
  }
  getRole()
  {
     var Role= JSON.parse(localStorage.getItem('Role'))
     if(Role == null)
     {
       return null;
     }
     else{
     return Role.Role;
   
     }
  }
  getLoggedInUserID()
  {
     var username= JSON.parse(localStorage.getItem('currentUser'))
     if(username == null)
     {
       return null;
     }
     else{
     return this.username_id = username.id;
   
     }
  }
}
