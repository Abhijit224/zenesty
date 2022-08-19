import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BleachService } from 'src/app/AppServices/bleach.service';
interface bleach {
  id: number,
  isSelected: boolean,
  name: string,
  time: number,
  price: number
}
@Component({
  selector: 'app-bleach',
  templateUrl: './bleach.component.html',
  styleUrls: ['./bleach.component.css']
})
export class BleachComponent implements OnInit {
  itemSelected: any
  checkitem: bleach[] = []
  info: any
  ProfileData$: any
  itemList: [] = []
  servicename: any
  totalprice = 0
  totaltime = 0
  OxyBleach: bleach[] = [
    { id: 1, name: 'Face & Neck', time: 20, price: 349, isSelected: false },
    { id: 2, name: 'Full Back', time: 20, price: 349, isSelected: false },
    { id: 3, name: 'Half Back', time: 20, price: 199, isSelected: false },
    { id: 4, name: 'Full Hand', time: 20, price: 399, isSelected: false },
    { id: 5, name: 'Full Leg', time: 20, price: 499, isSelected: false },
    { id: 6, name: 'Only Feet', time: 20, price: 149, isSelected: false },
    { id: 7, name: 'Full Front', time: 20, price: 399, isSelected: false },
    { id: 8, name: 'Half Front', time: 20, price: 199, isSelected: false },
    { id: 9, name: 'Full Body', time: 45, price: 1199, isSelected: false },
  ]
  Reechfeel: bleach[] = [
    { id: 1, name: 'Face & Neck', time: 25, price: 349, isSelected: false },
    { id: 2, name: 'Full Back', time: 25, price: 349, isSelected: false },
    { id: 3, name: 'Half Back', time: 25, price: 199, isSelected: false },
    { id: 4, name: 'Full Hand', time: 25, price: 399, isSelected: false },
    { id: 5, name: 'Full Leg', time: 25, price: 499, isSelected: false },
    { id: 6, name: 'Only Feet', time: 25, price: 149, isSelected: false },
    { id: 7, name: 'Full Front', time: 25, price: 399, isSelected: false },
    { id: 8, name: 'Half Front', time: 25, price: 199, isSelected: false },
    { id: 9, name: 'Full Body', time: 45, price: 1199, isSelected: false },
  ]
  Cheryl: bleach[] = [
    { id: 1, name: 'Face & Neck', time: 25, price: 349, isSelected: false },
    { id: 2, name: 'Full Back', time: 25, price: 349, isSelected: false },
    { id: 3, name: 'Half Back', time: 25, price: 199, isSelected: false },
    { id: 4, name: 'Full Hand', time: 25, price: 399, isSelected: false },
    { id: 5, name: 'Full Leg', time: 25, price: 499, isSelected: false },
    { id: 6, name: 'Only Feet', time: 25, price: 149, isSelected: false },
    { id: 7, name: 'Full Front', time: 25, price: 399, isSelected: false },
    { id: 8, name: 'Half Front', time: 25, price: 199, isSelected: false },
  ]
  constructor(
    private _bleach: BleachService,
    private _toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }
  serviceName(ser: any) {
    this.servicename = ser
  }
  onchange(e: any) {
    if (e.checked == true) {
      if (this.servicename === 'Oxy') {
        this.itemSelected = this.OxyBleach.filter(x => x.isSelected == true)
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
      }
      else if (this.servicename === 'Reechfeel')
        this.itemSelected = this.Reechfeel.filter(x => x.isSelected == true)
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
    }
    else {
      this.itemSelected = this.Cheryl.filter(x => x.isSelected == true)
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
    }
  }
  uncheckall() {
    this.itemSelected.forEach((item: any) => {
      item.isSelected = false
      while (this.checkitem.length) {
        this.checkitem.pop()
      }
    })
    this.totalprice = 0
    this.totaltime = 0
  }
  checkOrder() {
    if (this.itemSelected === undefined) {
      this._toastr.warning('Please select anything')
    } else {
      this._toastr.success('Thank you for choose this services..')
      this._bleach.getBleachOrder(this.itemSelected, this.totalprice, this.totaltime, this.servicename)
    }
  }
}
