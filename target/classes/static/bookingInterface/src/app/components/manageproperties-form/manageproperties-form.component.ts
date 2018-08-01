
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../classes/property';
import {LoginService} from '../../services/login.service'
import { AccBooking } from '../../classes/acc-booking';
import { AccBookingService } from '../../services/acc-booking.service';
import { PropertyMapService } from '../../services/property-map.service';
import {User} from '../../classes/user';
import { UserService } from '../../services/user.service';
import { ValueTransformer } from '@angular/compiler/src/util';
import { PropertyTimeSheetService } from '../../services/property-time-sheet.service';
import {FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manageproperties-form',
  templateUrl: './manageproperties-form.component.html',
  styleUrls: ['./manageproperties-form.component.css']
})
export class ManagepropertiesFormComponent implements OnInit {

  private property: Property;
  private username:string;
  private admin:any;
  private properties:Property[];
  private bookings:AccBooking[];
  private editProperty:FormGroup;
  private user:User[];

  private ownedProperties:string = "Property";
  private userID:number;
  private propID:number;

  constructor(public toastr:ToastrService,private _formBuilder:FormBuilder,private _PropertyTimeSheet:PropertyTimeSheetService,private _userService:UserService,private _propertyMapService:PropertyMapService,private _accBookingService:AccBookingService,private _propertyService: PropertyService, private _router: Router,private _login:LoginService) { }


  ngOnInit() {
    this.propID = this._PropertyTimeSheet.getPropertyId(); 

    console.log("PROPERTY NUMBER",this.propID);
    this.editProperty = this._formBuilder.group({
      "txt_PropertyName":new FormControl('',[Validators.maxLength(150),Validators.required]),
      "propertyType":new FormControl('',[Validators.maxLength(150),Validators.required]),
      "txt_noOfRooms" : new FormControl('',[Validators.maxLength(150),Validators.required]),
      "txt_City" :new FormControl('',[Validators.maxLength(150),Validators.required])
      ,"txt_contact" :new FormControl('',[Validators.required]),
      "txt_AddressLine2":new FormControl('',[Validators.maxLength(150),Validators.required]),
      "txt_Country":new FormControl('',[Validators.maxLength(150),Validators.required]),
      "txt_Province" :new FormControl('',[Validators.maxLength(150),Validators.required])
      ,"txt_streetAddress" :new FormControl('',[Validators.required])
      ,"txt_website" :new FormControl(''),
      "txt_price":new FormControl('',[Validators.maxLength(150),Validators.required]),
      "txt_PostalCode":new FormControl('',[Validators.maxLength(150),Validators.required])
    
    
    
    
    });

    this.property = this._propertyService.getter();
    this.username = this._login.getLoggedInUser();
   
    this.ownedProperties = this._PropertyTimeSheet.getPropertyName();
    this._accBookingService.getAccBookings().subscribe((accBooking)=>{console.log("Accommodation " ,accBooking);
      this.bookings = accBooking;
      //console.log(property);
    
        
    
    },(error)=>{
      console.log(error);
     
    })

    this._userService.getUsers().subscribe((users)=>{console.log(users);
      this.user = users;
    })

    this.userID = this._login.getLoggedInUserID();

    this._propertyService.getProperties().subscribe((property)=>{console.log(property);
      this.properties = property;
    },(error)=>{
      console.log(error);
     
    })
     
  }


  calculateReservations()
  {
    var propId = this._PropertyTimeSheet.getPropertyId();
    var count = 0;
    
    if(this.bookings != undefined){
    this.bookings.forEach(function(value)
    {
      if(propId == value.prop_Id)
      { 
          count++;
      }
    });
  }

    return count;
  }

  deleteProperty()
  {
    this._propertyService.deleteProperty(this.propID).subscribe((data)=>{
      this.properties.splice(this.properties.indexOf(this.property),1);
     //alert("Property successfully removed");
     this._router.navigate(['home']);
     this.toastr.success("Property successfully removed","Success");
     
    });
    
    

  }

  
  manageProperty(accBookingName:string,user_id:number)
  {
    var checked = false;
    var userid = this.userID;
    var place =accBookingName;
    var pUserID = null;
    var vpropID = null;
    
    this.bookings.forEach(function(value) {
      if(accBookingName == value.prop_name && user_id == value.user_id && userid == value.user_id)
      {
        checked =true;
        place = value.prop_name;
       
        
      }
      else
      {
        pUserID = "wrong"
      }
    });

    this.properties.forEach(function(value){
      if(value.user_Id == userid && accBookingName == value.prop_name )
      {
        vpropID = value.prop_Id;
      }
    });

   
    this.ownedProperties = place;
    this.propID = vpropID;

    this._PropertyTimeSheet.setPropertyId(this.propID,this.ownedProperties);
   
    console.log(this.ownedProperties,this.propID);
    location.reload();
  }
  logout()
  {
    this._login.logOut();
  }
  EditProfile()
  {
    this._router.navigate(['editProfile']);
  }
  ManageBooking()
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
  processForm(prop_name: string,
    prop_type: string,
    numberRoom: number,
    city: string,
    contact_name: string,
    addressline2: string,
    country: string,
    image: File,
    province: string,
    streetAddress: string,
    website: string,
    price: string,
    postal_code: string) {

      this.property.prop_Id = this._PropertyTimeSheet.getPropertyId();
      this.property.user_Id = this.userID;
    if (prop_name == null || prop_type == null || numberRoom == null || city == null ||
       contact_name == null || addressline2 == null || country == null ||province==null||streetAddress==null||
       price==null||postal_code==null) {
      console.log("Enter Values");
      
      // alert("Make sure you entered all the needed fields");
    } else {
      
     if (this.property.prop_Id == undefined){
       
      //alert("Update failed");
      this.toastr.error("Update failed","Error");
    
      }
      else
      {
        this._propertyService.updateProperty(this.property).subscribe((property) => {
          console.log(property);
          this._PropertyTimeSheet.setPropertyId(this.property.prop_Id,this.property.prop_name);
   
         // alert("Update Successful");
         
          location.reload();
          this.toastr.success("Update Successful","Success");
    
        },
          (error) => {
            console.log(error);
          }

        );
      }
    }
    return false;
  }





}

 