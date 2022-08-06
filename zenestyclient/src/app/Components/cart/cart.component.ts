import { _isNumberValue } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CartService } from 'src/app/AppServices/cart.service';
import { UserService } from 'src/app/AppServices/user.service';

@Component({
 selector: 'app-cart',
 templateUrl: './cart.component.html',
 styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 token: any
 userData: any
 data:any
 constructor(
  private _user: UserService,
  private _jwt: JwtHelperService,
  private _cartService: CartService
 ) { }

 ngOnInit(): void {
  this.getCart()
 }

 getCart() {
  this._cartService.getCartInfo()
  .subscribe((result)=>{
    this.data=result
  })

 }


}
