import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/AppServices/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  auth: boolean = false
  user: any
  constructor(
    private _auth: UserService,
    private _jwt: JwtHelperService,
    private _router:Router,
  ) { }

  ngOnInit(): void {
    this.getUserInfo()

  }
  getAuth() {
    if (localStorage.getItem('userToken') === null || undefined) {
      return false
    }
    else {

      return true
    }
  }
  getUserInfo() {
    const i = localStorage.getItem('userToken')
    this.user = this._jwt.decodeToken(i || undefined)
   
  }
  logout() {
    localStorage.removeItem('userToken')
    this._router.navigate(['/login'])
    window.location.reload()
  }
  ngOnDistory(){

  }
}
