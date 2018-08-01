import { Component ,ViewContainerRef } from '@angular/core';
import {LoginService} from './services/login.service';
import {FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';

   
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']})
export class AppComponent {
  title = 'app';

  form;
  

  ngOnInit()
  { 
    

    var username= JSON.parse(localStorage.getItem('currentUser'))
    var admin = JSON.parse(localStorage.getItem('Admin'))
    if (username == null )
    {
    localStorage.setItem('currentUser',JSON.stringify({status:false}));
    }
    else
    if( admin == null)
    {
      localStorage.setItem('Admin',JSON.stringify({status:false}));
    }
  }
}


