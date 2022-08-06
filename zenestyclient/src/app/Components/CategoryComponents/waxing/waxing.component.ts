import { Component, OnInit } from '@angular/core';
interface waxing {
  id: number,
  isSelected: boolean,
  name: string,
  description: string,
  time: number,
  price: number
}
@Component({
  selector: 'app-waxing',
  templateUrl: './waxing.component.html',
  styleUrls: ['./waxing.component.css']
})
export class WaxingComponent implements OnInit {
  itemSelected: any
  checkitem: waxing[] = []
  info: any
  ProfileData$: any
  servicename:any
  totalprice = 0
  totaltime = 0
  honeyWaxing = [] = [
    { id: 1, name: 'Full Hand', description: '', time: 0, price: 180, isSelected: false },
    { id: 2, name: 'Full Lips', description: '', time: 0, price: 220, isSelected: false },
    { id: 3, name: 'Underarms', description: '', time: 0, price: 40, isSelected: false },
    { id: 4, name: 'Half Legs', description: '', time: 0, price: 180, isSelected: false },
    { id: 5, name: 'Half Back', description: '', time: 0, price: 120, isSelected: false },
    { id: 6, name: 'Full Back', description: '', time: 0, price: 280, isSelected: false },
    { id: 7, name: 'Full Front', description: '', time: 0, price: 280, isSelected: false },
    { id: 8, name: 'Half Front', description: '', time: 0, price: 120, isSelected: false },
    { id: 9, name: 'Bikini', description: '', time: 0, price: 550, isSelected: false },
    { id: 10, name: 'Stomach', description: '', time: 0, price: 200, isSelected: false },
    { id: 11, name: 'Buttocks', description: '', time: 0, price: 180, isSelected: false },
    { id: 12, name: 'Full Body', description: '', time: 0, price: 850, isSelected: false },
    { id: 13, name: 'Combo', description: '', time: 0, price: 500, isSelected: false },
   ]
  ricaWaxing = [] = [
    { id: 1, name: 'Full Hand', description: '', time: 10, price: 250, isSelected: false },
    { id: 2, name: 'Full Lips', description: '', time: 10, price: 400, isSelected: false },
    { id: 3, name: 'Underarms', description: '', time: 10, price: 80, isSelected: false },
    { id: 4, name: 'Half Legs', description: '', time: 10, price: 300, isSelected: false },
    { id: 5, name: 'Half Back', description: '', time: 15, price: 250, isSelected: false },
    { id: 6, name: 'Full Back', description: '', time: 10, price: 450, isSelected: false },
    { id: 7, name: 'Full Front', description: '', time: 15, price: 450, isSelected: false },
    { id: 8, name: 'Half Front', description: '', time: 20, price: 250, isSelected: false },
    { id: 9, name: 'Bikini', description: '', time: 20, price: 850, isSelected: false },
    { id: 10, name: 'Stomach', description: '', time: 20, price: 250, isSelected: false },
    { id: 11, name: 'Buttocks', description: '', time: 20, price: 350, isSelected: false },
    { id: 12, name: 'Full Body', description: '', time: 20, price: 1350, isSelected: false },
    { id: 13, name: 'Combo', description: '', time: 20, price: 650, isSelected: false },
  ]
  hygienicRollOnWaxing = [] = [
    { id: 1, name: 'Underarms', description: '', time: 0, price: 200, isSelected: false },
    { id: 2, name: 'Bikini', description: '', time: 0, price: 950, isSelected: false },
    { id: 3, name: 'Side Locks', description: '', time: 20, price: 120, isSelected: false },
    { id: 4, name: 'Full Face', description: '', time: 20, price: 450, isSelected: false },
    { id: 5, name: 'Stomach', description: '', time: 20, price: 120, isSelected: false },
    { id: 6, name: 'Buttocks', description: '', time: 20, price: 2500, isSelected: false },
    { id: 7, name: 'Full Body', description: '', time: 20, price: 850, isSelected: false },
    { id: 8, name: 'Combo', description: '', time: 20, price: 60, isSelected: false },
    { id: 9, name: 'Chin', description: '', time: 20, price: 120, isSelected: false },
    { id: 10, name: 'Upperlips', description: '', time: 20, price: 60, isSelected: false },]
  brazilianWaxing = [] = [
    { id: 1, name: 'Underarms', description: '', time: 10, price: 200, isSelected: false },
    { id: 2, name: 'Bikini', description: '', time: 20, price: 950, isSelected: false },
    { id: 3, name: 'Side Locks', description: '', time: 20, price: 120, isSelected: false },
    { id: 4, name: 'Full Face', description: '', time: 20, price: 450, isSelected: false },
    { id: 5, name: 'Buttocks', description: '', time: 20, price: 120, isSelected: false },
    { id: 6, name: 'Chin', description: '', time: 20, price: 500, isSelected: false },
    { id: 7, name: 'Upperlips', description: '', time: 20, price: 60, isSelected: false },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  serviceName(ser:any){
    this.servicename=ser
   }
   onchange(e:any){
    if (e.checked == true) {
    switch(this.servicename){
      case 'honeyWaxing':{
        this.itemSelected = this.honeyWaxing.filter(x => x.isSelected == true)
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
        break;
      }
      case 'ricaWaxing':{
        this.itemSelected = this.ricaWaxing.filter(x => x.isSelected == true)
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
        break;
      }
      case 'hygienicRollOnWaxing':{
        this.itemSelected = this.hygienicRollOnWaxing.filter(x => x.isSelected == true)
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
        break;
      }
      case 'brazilianWaxing':{
        this.itemSelected = this.brazilianWaxing.filter(x => x.isSelected == true)
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
        break;
      }
    }
  } 
}
 uncheckall(){
  this.itemSelected.forEach((item: any) => {
    item.isSelected = false
    while (this.checkitem.length) {
      this.checkitem.pop()
    }
  })
  this.totalprice=0
  this.totaltime=0
}
checkOrder(){
  
}
}
