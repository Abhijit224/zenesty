import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BeautyspaService } from 'src/app/AppServices/beautyspa.service';
interface beautyspa {
  id: number,
  isSelected: boolean,
  name: string,
  description: string,
  time: number,
  price: number
}
@Component({
  selector: 'app-beautyspa',
  templateUrl: './beautyspa.component.html',
  styleUrls: ['./beautyspa.component.css']
})
export class BeautyspaComponent implements OnInit {
  itemSelected: any
  checkitem: beautyspa[] = []
  info: any
  ProfileData$: any
  serviceName: any
  totalprice = 0
  totaltime = 0
  spa = [] = [
    { id: 1, name: 'Detan ', description: 'Face & Neck', time: 80, price: 350, isSelected: false },
    { id: 2, name: 'Detan', description: 'full Back', time: 30, price: 500, isSelected: false },
    { id: 3, name: 'Detan', description: 'Half Back', time: 30, price: 500, isSelected: false },
    { id: 4, name: 'Detan', description: 'Full Hand', time: 25, price: 250, isSelected: false },
    { id: 5, name: 'Detan', description: 'Full Leg', time: 25, price: 300, isSelected: false },
    { id: 6, name: 'Detan', description: 'Full Body', time: 25, price: 2100, isSelected: false },
    { id: 7, name: 'Cleanup', description: 'VLCC', time: 30, price: 350, isSelected: false },
    { id: 8, name: 'Cleanup', description: 'AayanVedha', time: 30, price: 450, isSelected: false },

  ]
  constructor(
    private _router: Router,
    private _spa: BeautyspaService,
    private _toastr: ToastrService,
  ) { }

  ngOnInit(): void {
  }
  servicename(ser: string) {
    this.serviceName = ser;
  }
  goToHome() {
    this._router.navigate(['/'])
    this.uncheckall()
  }
  onchange(e: any) {
    if (e.checked == true) {
      this.itemSelected = this.spa.filter(x => x.isSelected == true)
      this.checkitem.push(this.itemSelected)
    } else {
      this.itemSelected = this.spa.filter(x => x.isSelected == true)
    }
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
      this._spa.getSpaOrder(this.itemSelected, this.totalprice, this.totaltime, this.serviceName)
    }
  }

}
