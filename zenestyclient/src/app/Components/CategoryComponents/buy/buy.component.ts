import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/AppServices/user.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
id:any
Token$:any
userData:any
cartData:any
orderDetail:any
serviceName:any
totalPrice:any
totalTime:any
  constructor(
    private _router:Router,
    private _activeRouter:ActivatedRoute,
    private _http:HttpClient,
    private _userService:UserService,
    private _jwt:JwtHelperService,
    private _toastr:ToastrService
  ) { }

  ngOnInit(): void {
   console.log(this._userService.userInfo$)
   this.id=this._activeRouter.snapshot.params['id']
   const itemid=this.id
   this._http.get('http://localhost:4000/cart/selectitem/'+ itemid).subscribe((result)=>{
   this.cartData=result
   this.Token$ = localStorage.getItem('userToken')
   if(!this.Token$){
   this._toastr.warning('Please login first...')
     }
   this.userData = this._jwt.decodeToken(this.Token$)
   console.log(this.userData)
   })
   


  }

}
