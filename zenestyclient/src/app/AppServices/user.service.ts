import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { User } from '../DatabaseModal/user';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLogin$!: boolean;
  isRegister$!: boolean
  data: any
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _toastr:ToastrService
  ) { }
  authservice(email: any, pass: any) {
    return this._http.post('http://localhost:4000/user/authentication', { email, pass })
      .subscribe((result) => {
        if (!result) {
          this.isLogin$ = false
        }
        localStorage.setItem('userToken', JSON.stringify(result))
        this.isLogin$ = true
      })
  }
  checkUser(checkemail: any) {
    return this._http.get<User>('http://localhost:4000/user/register/' + checkemail)
      .subscribe((data)=>{
       if(data){
        this._toastr.success('see')
        this._router.navigate(['/login'])
       }
      })
  }
  getRegister(User:any){
    return this._http.post('http://localhost:4000/user/register/',{User})
    .subscribe((result)=>{
      if(result){
        this._toastr.success('You are register successfully')
        this._router.navigate(['/login'])
      }
    })
  }
}
