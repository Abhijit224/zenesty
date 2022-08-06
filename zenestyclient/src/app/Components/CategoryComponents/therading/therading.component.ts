import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface threading {
  id: number,
  isSelected: boolean,
  name: string,
  description:string,
  time: number,
  price: number
}
@Component({
  selector: 'app-therading',
  templateUrl: './therading.component.html',
  styleUrls: ['./therading.component.css']
})
export class TheradingComponent implements OnInit {
  itemSelected:any
  checkitem:threading[]=[]
  totalprice:any
  totaltime:any
  info:any
  serviceName:any
  threading = [] = [
    { id: 1, name: 'Eye Brows', description: '', time: 10, price: 59, isSelected: false },
    { id: 2, name: 'Upper Lips', description: '', time: 10, price: 29, isSelected: false },
    { id: 3, name: 'Forhead', description: '', time: 10, price: 29, isSelected: false },
    { id: 4, name: 'Chin', description: '', time: 10, price: 29, isSelected: false },
    { id: 5, name: 'Lower Lips', description: '', time: 15, price: 29, isSelected: false },
    { id: 6, name: 'Side Locks', description: '', time: 10, price: 69, isSelected: false },
    { id: 7, name: 'Neck', description: '', time: 15, price: 79, isSelected: false },
    { id: 8, name: 'Full Face', description: '', time: 20, price: 139, isSelected: false },
  ]
  constructor(
    private _router:Router,
    
  ) { }

  ngOnInit(): void {
  }
  onchange(event:any){
    if (event.checked == true) {
      this.itemSelected = this.threading.filter(x => x.isSelected == true)
     
      this.checkitem.push(this.itemSelected)
    }
    else {
      this.itemSelected = this.threading.filter(x => x.isSelected == true)
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
  servicename(ser:any){
    this.serviceName=ser;
  }
  checkOrder(){
   
  }
  goToHome(){
    this._router.navigate(['/'])
    this.uncheckall()
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

}
