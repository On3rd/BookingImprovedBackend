import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.css']
})
export class LoggedUserComponent implements OnInit {
 
  
  
  constructor(private _router:Router,private _userService:UserService) { 
    
 }

  ngOnInit() {
     
  }
  
}
