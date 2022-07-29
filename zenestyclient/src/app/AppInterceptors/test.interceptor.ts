import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../AppServices/user.service';

@Injectable()
export class TestInterceptor implements HttpInterceptor {
  Token:any
  constructor(
    private _userService:UserService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("interceptor is working")
    
    return next.handle(request);
  }
}
