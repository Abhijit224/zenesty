import { _isNumberValue } from '@angular/cdk/coercion';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
 @ViewChild('buycard')
  buycard!: ElementRef;
 constructor(
  private _user: UserService,
  private _jwt: JwtHelperService,
  private _cartService: CartService,
  private _router:Router,
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
 deleteitem(id:any){
  this._cartService.getDeleteOrder(id)
  window.location.reload();
 }
buyitem(id:any){

  this._router.navigate(['buy',{id}])
}


}
