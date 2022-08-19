import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TheradingService {

  constructor(
    private _http: HttpClient,
    private _userService: UserService,
    private _router: Router
  ) { }
  getBleachOrder(items: any, totalprice: any, totaltime: any, servicename: any) {
    const auth = this._userService.userInfo()
    if (auth === false) {
      this._router.navigate(['login']).then(() => {
        window.location.reload();
      })
    }
    else {
      const user = this._userService.userInfo$
      const id = user.id
      if (items != undefined) {
        this._http.post('http://localhost:4000/postOrder', { id, items, totaltime, totalprice, servicename })
          .subscribe((result) => {
            console.log(result)
          })
      }
    }
  }
}
