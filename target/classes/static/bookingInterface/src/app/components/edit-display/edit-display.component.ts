import { Component, OnInit } from '@angular/core';
import {DispProperty} from '../../classes/disp-property';
import {Router} from '@angular/router';
import {DisplayPropertiesServiceService} from '../../services/display-properties-service.service';
import {UserService} from '../../services/user.service';
import {User} from '../../classes/user';
import { forEach } from '@angular/router/src/utils/collection';
import {LoginService} from '../../services/login.service';
import { CookieService } from 'angular2-cookie/core';
import {LocalStorageService,SessionStorageService} from 'ngx-webstorage';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-display',
  templateUrl: './edit-display.component.html',
  styleUrls: ['./edit-display.component.css']
})
export class EditDisplayComponent implements OnInit {

  private dispProperty: DispProperty;
  username:string;
  private admin:any;
  

  constructor(public toastr:ToastrService,private _login:LoginService,private _displayPropertiesService: DisplayPropertiesServiceService,private _router:Router) { }

  ngOnInit() {
    this.dispProperty = this._displayPropertiesService.getter()
    this.username = this._login.getLoggedInUser();
    

  
  }
  logout()
  {
    this._login.logOut();
  }
  home()
  {
    this._router.navigate(['home']);
    
  }
  ManageBooking()
  {
    this._router.navigate(['manageBooking']);
  }
  EditProfile()
  {
    this._router.navigate(['editProfile']);
  }

  viewProfile()
  {
    this._router.navigate(['viewProfile']);
  }
  
  processForm(
    city: string,
    country: string,
    image: File,
    province: string
   ) {

    if (city == null || country == null ||
      image == null||province==null  ) {
      console.log("Enter Values");
      this.toastr.error("Make sure your enter all the required inputs","Invalid Inputs");
      // alert("Make sure you entered all the needed fields");
    } else {
      if (this.dispProperty.disp_Id == undefined) {
        this._displayPropertiesService.createDisplayProperties(this.dispProperty).subscribe((dispProperty) => {
          console.log(dispProperty);
          this._router.navigate(['/home']);
        },
          (error) => {
            console.log(error);
          }

        );
      }
      else {
        this._displayPropertiesService.updateDisplayProperties(this.dispProperty).subscribe((dispProperty) => {
          console.log(dispProperty);
          this._router.navigate(['/home']);
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



