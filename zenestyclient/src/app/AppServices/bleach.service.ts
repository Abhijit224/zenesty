import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { order } from '../DatabaseModal/order';

@Injectable({
  providedIn: 'root'
})
export class BleachService {

  constructor(
    private _http:HttpClient
  ) { }
  getBleachOrder(items:any,totalprice:any,totaltime:any, servicename:any){
    
    console.log(items)
    console.log(totalprice)
    console.log(totaltime)
    console.log(servicename)
    return this._http.post<order>("http://localhost:4000/bleach/",{items,totalprice,totaltime,servicename})
    .subscribe((result)=>{
      console.log(result)
    })
  }
}
