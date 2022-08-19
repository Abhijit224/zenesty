import { Component, OnInit } from '@angular/core';
import { PadimaniService } from 'src/app/AppServices/padimani.service';
interface padimani {
  id: number,
  isSelected: boolean,
  name: string,
  description: string,
  time: number,
  price: number
}
@Component({
  selector: 'app-pedimani',
  templateUrl: './pedimani.component.html',
  styleUrls: ['./pedimani.component.css']
})
export class PedimaniComponent implements OnInit {
  itemSelected: any
  checkitem: padimani[] = []
  info: any
  ProfileData$: any
  servicename: any
  totalprice = 0
  totaltime = 0
  Padicure: padimani[] = [
    { id: 1, name: 'VLCC', description: '', time: 40, price: 400, isSelected: false },
    { id: 2, name: 'Vedic Line', description: 'classic pedi', time: 45, price: 500, isSelected: false },
    { id: 3, name: 'Vedic Line', description: 'express pedi', time: 40, price: 400, isSelected: false },
    { id: 4, name: 'Raga', description: '', time: 60, price: 650, isSelected: false },
  ]
  Manicure: padimani[] = [
    { id: 1, name: 'VLCC', description: '', time: 30, price: 250, isSelected: false },
    { id: 2, name: 'Vedic Line', description: '', time: 35, price: 350, isSelected: false },
    { id: 3, name: 'Raga', description: '', time: 45, price: 450, isSelected: false },
  ]
  constructor(
    private _padimani:PadimaniService
  ) { }

  ngOnInit(): void {
  }
  serviceName(ser: any) {
    this.servicename = ser
  }
  onchange(e: any) {
    if (e.checked == true) {
      switch (this.servicename) {
        case 'Padicure': {
          this.itemSelected = this.Padicure.filter(x => x.isSelected == true)
          let total = 0
          this.itemSelected.forEach((item: { price: number; }) => {
            total += item.price
          })
          let time = 0
          this.itemSelected.forEach((item: { time: number }) => {
            time += item.time
          })
          this.totalprice = total
          this.totaltime = time
          break;
        }
        case 'Manicure': {
          this.itemSelected = this.Manicure.filter(x => x.isSelected == true)
          let total = 0
          this.itemSelected.forEach((item: { price: number; }) => {
            total += item.price
          })
          let time = 0
          this.itemSelected.forEach((item: { time: number }) => {
            time += item.time
          })
          this.totalprice = total
          this.totaltime = time
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
  this._padimani.getBleachOrder(this.itemSelected,this.totalprice,this.totaltime,this.servicename)
  }

}
