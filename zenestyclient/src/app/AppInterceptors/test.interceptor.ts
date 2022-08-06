import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserService } from '../AppServices/user.service';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class TestInterceptor implements HttpInterceptor {
  Token:any
  userEmail:any
  constructor(
    private _userService:UserService,
    private _toastr:ToastrService,
    private _jwtHelper:JwtHelperService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
      // this.Token = localStorage.getItem('userToken')

    
      // const token = this._jwtHelper.decodeToken(this.Token)
      // this.userEmail = token.Email
      // const req=request.clone({
      //  setHeaders:{
      //   Authorization:`${this.Token}`
      //  }
      // })
    return next.handle(request)    
  }
}
