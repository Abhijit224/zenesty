import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FaceService } from 'src/app/AppServices/face.service';
interface facials {
  id: number,
  isSelected: boolean,
  name: string,
  description: string,
  time: number,
  price: number
}
@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {
  itemSelected: any
  checkitem: facials[] = []
  totalprice: any
  totaltime: any
  info: any
  serviceName: any
  face = [] = [
    { id: 1, name: 'VLCC', description: '', time: 50, price: 500, isSelected: false },
    { id: 2, name: 'Lotus', description: '', time: 50, price: 700, isSelected: false },
    { id: 3, name: 'ReechFeel', description: '', time: 50, price: 550, isSelected: false },
    { id: 4, name: 'Astaberry', description: 'Whitening', time: 50, price: 650, isSelected: false },
    { id: 5, name: 'Astaberry', description: 'Wine', time: 50, price: 550, isSelected: false },
    { id: 6, name: 'Shehnaz Hussen', description: 'pappaya', time: 50, price: 850, isSelected: false },
    { id: 7, name: 'Shehnaz Hussen', description: 'Anti Tan', time: 50, price: 950, isSelected: false },
    { id: 8, name: 'Shehnaz Hussen', description: 'Shehnaz Anti Ageing', time: 60, price: 1400, isSelected: false },
    { id: 9, name: 'Shehnaz Hussen', description: 'Shehnaz Pigmentation', time: 60, price: 1450, isSelected: false },
    { id: 10, name: 'Raaga', description: 'Whitening', time: 60, price: 1350, isSelected: false },
    { id: 11, name: 'Raaga', description: 'Anti Ageing', time: 60, price: 1550, isSelected: false },
    { id: 12, name: 'Raaga', description: 'Gold', time: 60, price: 1550, isSelected: false },
    { id: 13, name: `Cheryl's`, description: 'Glovite', time: 60, price: 1000, isSelected: false },
    { id: 14, name: `Cheryl's`, description: 'Sensiglow', time: 60, price: 1200, isSelected: false },
    { id: 15, name: 'O3', description: 'Shine & Glow', time: 60, price: 1500, isSelected: false },
    { id: 16, name: 'O3', description: 'Bridal Glow O3+', time: 80, price: 1900, isSelected: false },
    { id: 17, name: 'O3', description: 'O3+ Power Brighteing', time: 80, price: 1900, isSelected: false },
    { id: 18, name: 'O3', description: 'O3+ Feel Youthful Facial', time: 60, price: 1450, isSelected: false },
    { id: 19, name: 'Elysian', description: 'Glow Wine Facial', time: 60, price: 1099, isSelected: false },
    { id: 20, name: 'Elysian', description: 'Saundarya Multi Mask Facial', time: 60, price: 1399, isSelected: false },
  ]
  constructor(
    private _router: Router,
    private _face: FaceService,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }
  servicename(ser: any) {
    this.serviceName = ser;
  }
  onchange(event: any) {
    if (event.checked == true) {
      this.itemSelected = this.face.filter(x => x.isSelected == true)

      this.checkitem.push(this.itemSelected)
    }
    else {
      this.itemSelected = this.face.filter(x => x.isSelected == true)
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
  goToHome() {
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
    this.totalprice = 0
    this.totaltime = 0
  }
  checkOrder() {
    if (this.itemSelected === undefined) {
      this._toastr.warning('Please select anything')
    } else {
      this._toastr.success('Thank you for choose this services..')
      this._face.getBleachOrder(this.itemSelected, this.totalprice, this.totaltime, this.serviceName)
    }
  }
}
