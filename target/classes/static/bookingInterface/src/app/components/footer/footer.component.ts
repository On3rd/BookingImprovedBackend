import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private admin:any;

  constructor(private _login:LoginService ,private _router:Router) { }

  ngOnInit() {
    this.admin = this._login.getRole();
    
  }
  editDisplay()
  {
    this._router.navigate(['editDisplay']);
  }

}
