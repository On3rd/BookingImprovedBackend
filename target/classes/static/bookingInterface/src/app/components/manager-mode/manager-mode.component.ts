import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-manager-mode',
  templateUrl: './manager-mode.component.html',
  styleUrls: ['./manager-mode.component.css']
})
export class ManagerModeComponent implements OnInit {

  private admin;
  constructor(private _router:Router,private _login:LoginService) { }

  ngOnInit() {
  
  }
  editDisplay()
  {
    this._router.navigate(['editDisplay']);
  }
}
