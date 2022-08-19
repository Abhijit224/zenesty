import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MassageService } from 'src/app/AppServices/massage.service';
interface bodyMassage {
  id: number,
  isSelected: boolean,
  name: string,
  description:string,
  time: number,
  price: number
}
@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.css']
})
export class MassageComponent implements OnInit {
  itemSelected: any
  checkitem: bodyMassage[] = []
  info: any
  ProfileData$: any
  serviceName:any
  totalprice = 0
  totaltime = 0
  bodyMassage = [] = [
    { id: 1, name: 'Full Body Massage', description: '', time: 60, price: 1200, isSelected: false },
    { id: 2, name: 'Hot Oil Head Massage', description: '', time: 20, price: 250, isSelected: false },
    { id: 1, name: 'Back Massage', description: '', time: 20, price: 550, isSelected: false },
    { id: 1, name: 'Foot Massage', description: '', time: 25, price: 250, isSelected: false },
    { id: 1, name: 'Half Legs Massage', description: '', time: 25, price: 300, isSelected: false },
    { id: 1, name: 'Shoulder & Neck Massage', description: '', time: 25, price: 350, isSelected: false },
    { id: 1, name: 'Scalp Relaxing', description: '', time: 20, price: 250, isSelected: false },
  ]
  constructor( 
    private _router: Router,
    private _jwtHelper:JwtHelperService,
    private _massageService:MassageService
    ) { }

  ngOnInit(): void {
  }
  servicename(ser:string){
    this.serviceName=ser;
 }
  goToHome() {
    this._router.navigate(['/'])
    this.uncheckall()
  }
  onchange(e: any) {
    if (e.checked == true) {
      this.itemSelected = this.bodyMassage.filter(x => x.isSelected == true)
     
      this.checkitem.push(this.itemSelected)
    }
    else {
      this.itemSelected = this.bodyMassage.filter(x => x.isSelected == true)
    }
    let total = 0
    this.itemSelected.forEach((item: { price: number; }) => {
      total += item.price
    })
    let time=0
    this.itemSelected.forEach((item:{time:number})=>{
      time +=item.time
    })
    this.totalprice = total
    this.totaltime =time
  }
  uncheckall() {
    this.itemSelected.forEach((item: any) => {
      item.isSelected = false
      while (this.checkitem.length) {
        this.checkitem.pop()
      }
    })
    this.totalprice=0
    this.totaltime=0
  }
  checkOrder() {
   this._massageService.getOrder(this.itemSelected,this.totalprice,this.totaltime,this.serviceName)
  }


}
