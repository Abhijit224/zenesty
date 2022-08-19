import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token: any
  userData: any
  constructor(
    private _jwt: JwtHelperService,
    private _http: HttpClient
  ) { }
  getCartInfo() {
    this.token = localStorage.getItem('userToken')
    this.userData = this._jwt.decodeToken(this.token)
    const id = this.userData.id
    return this._http.get('http://localhost:4000/cart/' + id)
  }
  getDeleteOrder(id: any) {
    return this._http.delete('http://localhost:4000/cart/deleteitem/' + id)
      .subscribe((result) => {

      })
  }
}
