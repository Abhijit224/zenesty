import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  Token: any
  userEmail: any
  url='http://localhost/'
  constructor(
    private _toastr: ToastrService,
    private _http: HttpClient,
    private _jwtHelper: JwtHelperService,
    private _router: Router
  ) { }

  getAuth() {
    if (localStorage.getItem('userToken') == undefined || null) {
      this._router.navigate(['/login']).then(result => {
        if (result) {
          location.reload();
        }
      });
      return false
    }
    this.Token = localStorage.getItem('userToken')
    const token = this._jwtHelper.decodeToken(this.Token)
    return this.userEmail = token.Email
    return true
  }
  getBasicOrder(itemlist: any,price:any,servicename:any) {
    const email=this.userEmail
    console.log(itemlist)
    this._http.post('http://localhost:4000/offers/basic',{itemlist,email,price,servicename})
    .subscribe((result)=>{
      if(!result){
        this._toastr.warning("something goes wrong")
        console.log("error")
      }
      else{
        this._toastr.success('done')
        console.log('done')
      }
    })
  }
}
