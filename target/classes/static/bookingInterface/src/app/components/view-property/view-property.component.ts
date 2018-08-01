import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Property} from '../../classes/property';
import {Router} from '@angular/router';
import {PropertyMapService} from '../../services/property-map.service';
import {PropertyMaps} from '../../classes/property-maps';
import {PropertyService} from '../../services/property.service';
import {AccBookingService} from '../../services/acc-booking.service';
import {AccBooking} from '../../classes/acc-booking';
import {LoginService} from '../../services/login.service';
import {User} from '../../classes/user';
import { PropertyTimeSheetService } from '../../services/property-time-sheet.service';
import { PropertyTimeSheet } from '../../classes/property-time-sheet';
import { SearchUserService } from '../../services/search-user.service';
import { UserPaymentMethod } from '../../classes/user-payment-method';
import { UserPaymentMethodService } from '../../services/user-payment-method.service';
import {MatDialog,MatDialogConfig,MatCardModule} from '@angular/material';
import {PaymentComponent} from './../payment/payment.component';
import {FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { DisplayPropertiesServiceService } from '../../services/display-properties-service.service';
import { UserService } from '../../services/user.service';

    
@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  private property;
  private propertyMaps:PropertyMaps;
  private searchProperty:string;
  private accBooking:AccBooking;
  private user:User[];
  private users:User;
  private admin:any;
  private timeSlot:PropertyTimeSheet[];
  private timeSheet:PropertyTimeSheet;
  private y = 0;
  private prop_ID;
  private paymentMethod;
  private date;
  private dialogResult;
  private payMethodStatus;
  private checkInForm:FormGroup;
  private statement = false;



  constructor(public toastr: ToastrService, private _formBuilder:FormBuilder,public dialog:MatDialog,private _paymentMethodService:UserPaymentMethodService,private _searchUserService:SearchUserService,private _propertyTimeSheetService:PropertyTimeSheetService,private _login:LoginService,private _PropertyService:PropertyService, private _router:Router,private _propertyMapService:PropertyMapService,private _accBookingService :AccBookingService,private _displayPropertiesService:DisplayPropertiesServiceService,private _userService:UserService) 
  { 

       //this.searchProperty=this._propertyMapService.getPropName();
    this.username = this._login.getLoggedInUser();
    //console.log(this.searchProperty);
  }
  username:string;
  userID:number;
 
  ngOnInit() {

    
    this.checkInForm = this._formBuilder.group({
      "txt_checkInDate":new FormControl('',[Validators.maxLength(100),Validators.required]),
      "txt_checkOutDate":new FormControl('',[Validators.maxLength(100),Validators.required]),
      "adults" : new FormControl('',[Validators.maxLength(100),Validators.required]),
      "children" :new FormControl('',[Validators.maxLength(10),Validators.required])
      });
      
    //this.payMethodStatus = this._login.getPaymentMethod();
    this.property = this._displayPropertiesService.getSearchResults();
    this.accBooking = this._accBookingService.getter();
    
    this.prop_ID = this._searchUserService.getSearchId();
    
    
    this.paymentMethod = this._login.getPaymentMethod(); 
    this.admin = this._login.getRole();


    console.log("The Property ID Is ",this.prop_ID);
    this._propertyTimeSheetService.getPropertyTimeSheets().subscribe((timeslot) =>
  {
    this.timeSlot = timeslot;
    console.log("Time slot" ,this.timeSlot);
  })
   
  this.date = this.currentDate();


  }
  
openDialog()
{
  
  let dialogRef = this.dialog.open(PaymentComponent,{
    width:'1220px'
   
  });

  dialogRef.afterClosed().subscribe(result =>
  {
    console.log('Dialog closed: ${result}');
    this.dialogResult = result;
  });

  
}
   currentDate()
   {
     var date = new Date();
     return date.getFullYear() +'-'+ date.getMonth() + '-' + date.getDay() ;
   }
   viewProfile()
   {
     this._router.navigate(['viewProfile']);
   }
  ManageBooking()
  {
    this._router.navigate(['manageBooking']);
  }
  EditProfile()
  {
    this._router.navigate(['editProfile']);
  }
  logout()
  {
    this._login.logOut();
   
  }
  home()
  {
    this._router.navigate(['home']);
  }
  viewManager(user_id:number)
 {
  this._userService.searchUser(user_id).subscribe(users=>
  {
    this._userService.setUserResult(users);
    this._router.navigate(['searchUser']);
  });
 
 }
  back()
  {

    this._router.navigate(["home"]);
  }
  reserve(checkInDate:Date,
    checkOutDate:Date,
    prop_name:string,
    prop_type:string,
    numberRoom:string, 
    city:string,
    contact_name:string, 
    addressline2:string, 
    country:string,  
    province:string, 
    streetAddress:string, 
    price:number, 
    postal_code:string,noOfChildren:string,noOfAdults:string )
  {
   this.accBooking.noOfVisitors = parseInt(this.accBooking.noOfAdults) + parseInt(this.accBooking.noOfChildren);
   this.accBooking.addressline2 = addressline2;
   this.accBooking.city=city;
   this.accBooking.contact_name=contact_name;
   this.accBooking.country=country;
   this.accBooking.numberRoom=numberRoom;
   this.accBooking.postal_code=postal_code;
   this.accBooking.price=price;
   this.accBooking.prop_name=prop_name;
   this.accBooking.prop_type=prop_type;
   this.accBooking.province = province;
   this.accBooking.streetAddress=streetAddress;
   this.accBooking.user_id = this.userID;
   this.accBooking.prop_Id = this.prop_ID;
   
  // this.accBooking.user_id = this.userID;


  var checkInDate1 = new Date(checkInDate);
  var checkOutDate2 = new Date(checkOutDate);
   var prop_Id = this.prop_ID; 
  var paymentMethod = this.payMethodStatus;
  var UID = this.userID;
  
   
  if(!this.getStatement())
  {
    //alert('Add your payment method before making reversavations');
    this.toastr.info("Add your payment method before making reversavations","Payment Method");
        
    
  }else
  {
    while ( checkInDate1 < checkOutDate2)
    {
      this. y++;
      checkInDate1 = new Date(checkInDate1.getFullYear(),checkInDate1.getMonth(),checkInDate1.getDate() +1);
    }
    this.accBooking.nights = this.y - 1;
    
     console.log("stage 1",this.accBooking);
      if(checkInDate== null||checkOutDate== null)
      { 
        // alert("Enter Your Check In And Check Out Dates");
         this.toastr.info("Enter Your Check In And Check Out Dates","Check In/Check Out");
         //this.formType = "modal"; 
        // alert("Make sure you entered all the needed fields");
       } else{
         if(checkInDate >= checkOutDate)
         {
          this.toastr.error("Correct your check in and check out dates ","Error");
         }
         else{
        if(this.accBooking.accBooking_Id == undefined)
        {
          var startDate = new Date(checkInDate);
          var endDate = new Date(checkOutDate);
          var removeDate:any;
          var count = 0;
          var timeCleared = false;
          var userCleared = false;
          var timeID = 0;
          var TimeSheetService = this._propertyTimeSheetService;
          var TimeSlots = this.timeSlot;
          var userid = this.userID;
          var propertyOwnerID;
  
          /*this.property.forEach(function(value){
              if(prop_Id == value.prop_Id)
              {
                propertyOwnerID = value.user_Id;
              }
          });*/
  
          this._accBookingService.createAccBooking(this.accBooking).subscribe((accBookings)=>
            {
            console.log("Stage 2", accBookings);
             this._router.navigate(['/manageBooking']);
             this.toastr.success("Your Booking was successful!","Success");
  
             
            },
            (error)=>
            {
                console.log(error);
            }
            
            );
  
         // console.log("Stage 2", accBookings );
         // console.log("CheckIn" , startDate," check Out ",endDate)
  
        
          
            while(startDate <=endDate){
            TimeSlots.forEach(function(value) {
              console.log(" Works ***")
              var loopDate = new Date(value.availableDates);
              
             
              if(prop_Id == value.prop_Id && loopDate.getDate() == startDate.getDate() && loopDate.getMonth() == startDate.getMonth())
              {
                timeCleared = true;
                timeID = value.propTimeSheetId;
                console.log(" Works Tooo***", timeCleared)
                console.log("DATE DATE DATE ", loopDate )
                console.log("COMPARE ", startDate)
                console.log("Time Sheet ID " , timeID);
                TimeSheetService.deletePropertyTimeSheet(timeID).subscribe((data) =>{
                TimeSlots.splice(TimeSlots.indexOf(value),1);
  
                });
                
            
  
             
             }
            });
  
            
           
          
          console.log("HHHH",startDate);
          startDate.setDate(startDate.getDate()+1);
          count++;
         // this._router.navigate(['manageBooking'])
          }
          
          
          }
        }
        }
      
  }
  
      
    }

    getStatement()
  {
    if(this.paymentMethod != undefined)
    {
      var state;
      var UID = this.userID;

      this.paymentMethod.forEach(function(value)
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
//
//
//
//
//
//

  
}
