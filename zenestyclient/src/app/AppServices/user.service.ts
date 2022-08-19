import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { User } from '../DatabaseModal/user';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogin$!: boolean;
  isRegister$!: boolean
  userInfo$: any
  Token$: any
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _toastr: ToastrService,
    private _jwt: JwtHelperService
  ) { }
  authservice(email: any, pass: any) {
    return this._http.post('http://localhost:4000/user/authentication', { email, pass })
      .subscribe((result) => {
        if (!result) {
          this.isLogin$ = false
        }
        localStorage.setItem('userToken', JSON.stringify(result))
        this.Token$ = localStorage.getItem('userToken')
        this.isLogin$ = true
        this.userInfo$ = this._jwt.decodeToken(this.Token$)
        this._router.navigate([''])
      })
  }
  checkUser(checkemail: any) {
    return this._http.get<User>('http://localhost:4000/user/register/' + checkemail)
      .subscribe((data) => {
        if (data) {
          this._toastr.success('see')
          this._router.navigate(['/login'])
        }
      })
  }
  getRegister(User: any) {
    return this._http.post('http://localhost:4000/user/register/', { User })
      .subscribe((result) => {
        if (result) {
          this._toastr.success('You are register successfully')
          this._router.navigate(['/login'])
        }
      })
  }
  userInfo(){
     this.Token$ = localStorage.getItem('userToken')
     if(!this.Token$){
     this._toastr.warning('Please login first...')
      return false
     }
     this.userInfo$ = this._jwt.decodeToken(this.Token$)
     return true
  }
}
