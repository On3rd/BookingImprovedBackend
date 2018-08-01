import { Component, OnInit  } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {Navigate} from '../../classes/navigate';
import { empty } from 'rxjs/Observer';
import { Jsonp } from '@angular/http';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css']
})
export class StartpageComponent implements OnInit {

  private state:any;
  private username:string;
  private nav = new Navigate();
  private check:any;
  private admin:any;

  constructor(private _router:Router ,private _login:LoginService) { 
    

  }

  ngOnInit() {
    //console.log(this._login.getLoggedInUser());
    //var user = JSON.parse(localStorage.getItem('currentUser'));
    this.state = JSON.parse(localStorage.getItem('currentUser'));
    this.username = this.state.name;
    
    
      console.log(this.state);
  
  
    }
   viewProfile()
   {
     this._router.navigate(['viewProfile']);
   }
    EditProfile()
    {
      this._router.navigate(['editProfile']);
    }
    ManageBooking()
    {
      this._router.navigate(['manageBooking']);
    }
    logout()
    {
      this._login.logOut();
      location.reload();
    }
  home()
  {
    this._router.navigate(['home']);
  }
  accomodation()
  {
    if(this.check)
      {
        this._router.navigate(['/home']);
  }
    else
    {
      
      this._router.navigate(['/loggin']);
    }
  }
}
