import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';
import {Router} from '@angular/router'; 
import {User} from '../../classes/user';
import {Navigate} from '../../classes/navigate';
import {JwtuserDetails} from '../../classes/jwtuser-details';
import {LoginService} from '../../services/login.service';
import {LocalStorageService,SessionStorageService} from 'ngx-webstorage';
import { forEach } from '@angular/router/src/utils/collection';
import {FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
 
  private user:User;
  private users:User[];
  formType:string; 
  private reg:Boolean;
  signUpForm:FormGroup;
  private _navigate = new Navigate();
  private emailPattern =
  '^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}$';
private passwordPattern =
  '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&].{7,}';
  private validator;
  constructor(public toastr:ToastrService,public _formBuilder:FormBuilder,private _userService:UserService, private _router:Router,private _login:LoginService,private _localStorage:LocalStorageService) {
  }


   
   setValidate()
   {
    this.validator = "validate";
   }
   getValidate()
   {
     return this.validator;
   }

  ngOnInit() {
    this.user = this._userService.getter();
    this._userService.getUsers().subscribe((user)=>{console.log(user);
      this.users = user;
    })
    
    this.signUpForm = this._formBuilder.group({
      "name":new FormControl('',[Validators.maxLength(100),Validators.required]),
      "surname":new FormControl('',[Validators.maxLength(100),Validators.required]),
      "email" : new FormControl('',[Validators.maxLength(100),Validators.required,Validators.pattern(this.emailPattern)]),
      "phonenumber" :new FormControl('',[Validators.maxLength(10),Validators.required])
      ,"pword" :new FormControl('',[Validators.required,Validators.pattern(this.passwordPattern)])
    })

  }

  processForm(name:string,surname:string,email:string,phonenumber:string,pword:string)
  {
   
   
    var counters=0;
    var counter=0;
    var id = 0;
    var rag = true;

    if(this.user != null){
      this.users.forEach(function(value){
      if(value.email == email)
        {
         
       
          counters++;
          
      }
      });
    }

    if(name== null ||surname== null||email== null||phonenumber== null||pword == null )
    {
     //alert("Enter values");
      this.toastr.info("Enter values","Invalid Inputs");
    }else{
    if(counters>=1)
  { 
    
    // console.log("Enter Values");
     //this.formType = "modal"; 
    // console.log(rag);
     //alert("This Email Already Exists, Please Enter A New Email");
     this.toastr.info("This Email Already Exists, Please Enter A New Email","Invalid Inputs");
    
   } else{
    
    if(this.user.user_Id == undefined )
    {
      this._userService.createUser(this.user).subscribe((user)=>
      {
        id = user.user_Id;
        console.log(id);
        counter++;
        console.log(counter);
        
        //alert("Registration Successfull");
        this.toastr.success("Registration Successfull","Success");
    
        if(counter>=1)
    {
       this._login.setLogin(id,name,surname,email,phonenumber,null,null);
       this._router.navigate(['/home']);
       counter =0;
      console.log(counter);
    }
      }
      
      ,
      (error)=>
      {
          console.log(error);
      }
      
      );
    
     return false;
    }
    else
    {
      this._userService.updateUser(this.user).subscribe((user)=>
      {
        console.log(user);
        //this._router.navigate(['/home']);
      },
      (error)=>
      {
          console.log(error);
      }
      
      );
    }
  }

} 
  }
  

}



