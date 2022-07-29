import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OfferService } from 'src/app/AppServices/offer.service';

interface checkbox {
  id: number,
  name: string,
  isSelected: boolean
}
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  package: boolean = false;
  itemSelected: any;
  checkitem: string[] = []
  selectedItemLength = 0
  basicPackage: checkbox[] = [
    { id: 1, name: 'VLCC Tan Clear Facial', isSelected: false },
    { id: 2, name: 'Pedicure(Vedic Express', isSelected: false },
    { id: 3, name: 'Manicure(Vedic Express', isSelected: false },
    { id: 4, name: 'Any Threading', isSelected: false },
    { id: 5, name: 'Face & Neck Bleach(Oxy)', isSelected: false },
    { id: 6, name: 'Face & Neck De-tan (Raaga)', isSelected: false },
    { id: 7, name: 'Full Arm Waxing (Honey)', isSelected: false },
    { id: 8, name: 'Half Leg Waxing (Honey)', isSelected: false },
    { id: 9, name: 'Underarms Waxing (Honey)', isSelected: false },
    { id: 10, name: 'Hot Oil Head Massage', isSelected: false },
  ]
  standardPackage: checkbox[] = [
    { id: 1, name: 'Shahnaz Papaya Facial', isSelected: false },
    { id: 2, name: 'Pedicure (Vedic Classic)', isSelected: false },
    { id: 3, name: 'Manicure(Vedic Express', isSelected: false },
    { id: 4, name: 'Any Threading', isSelected: false },
    { id: 5, name: 'Face & Neck Bleach(Oxy)', isSelected: false },
    { id: 6, name: 'Face & Neck De-tan (Raaga)', isSelected: false },
    { id: 7, name: 'Full Arm Waxing (Honey)', isSelected: false },
    { id: 8, name: 'Half Leg Waxing (Honey)', isSelected: false },
    { id: 9, name: 'Underarms Waxing (Honey)', isSelected: false },
    { id: 10, name: 'Bikini Wax(Honey)', isSelected: false },
    { id: 11, name: 'Hot Oil Head Massage', isSelected: false }
  ]
  premiumPackage: checkbox[] = [
    { id: 1, name: 'Raaga Advance Whitening Facial', isSelected: false },
    { id: 2, name: 'Pedicure (Raaga)', isSelected: false },
    { id: 3, name: 'Manicure (Raaga)', isSelected: false },
    { id: 4, name: 'Any Threading', isSelected: false },
    { id: 5, name: 'Face & Neck Bleach (Richfee Bleach)', isSelected: false },
    { id: 6, name: 'Face & Neck De-tan (Raaga)', isSelected: false },
    { id: 7, name: 'Hair Spa (Loreal)', isSelected: false },
    { id: 8, name: 'Full Arm Waxing (Rica)', isSelected: false },
    { id: 9, name: 'Full Leg Waxin (Rica)', isSelected: false },
    { id: 10, name: 'Underarms Waxing (Rica)', isSelected: false },
    { id: 11, name: 'Bikini Waxing (Rica)', isSelected: false },
    { id: 12, name: 'Hot Oil Head Massage', isSelected: false }
  ]
  goldPackage: checkbox[] = [
    { id: 1, name: 'Cheryls Tan Clear Facial', isSelected: false },
    { id: 2, name: 'Pedicure (Cheryls)', isSelected: false },
    { id: 3, name: 'Manicure (Cheryls)', isSelected: false },
    { id: 4, name: 'Any Threading', isSelected: false },
    { id: 5, name: 'Face & Neck Bleach (Richfee Bleach)', isSelected: false },
    { id: 6, name: 'Face & Neck De-tan (Raaga)', isSelected: false },
    { id: 7, name: 'Hair Spa (Loreal)', isSelected: false },
    { id: 8, name: 'Full Arm Waxing (Rica)', isSelected: false },
    { id: 9, name: 'Full Leg Waxin (Rica)', isSelected: false },
    { id: 10, name: 'Underarms Waxing (Rica)', isSelected: false },
    { id: 11, name: 'Bikini Wax (Rica)', isSelected: false },
    { id: 12, name: 'Bikini Wax (Brazillian Stripless Wax) ', isSelected: false },
    { id: 13, name: 'Back Massage', isSelected: false },
    { id: 14, name: 'Scalp Relaxing', isSelected: false }
  ]
  platinumPackage: checkbox[] = [
    { id: 1, name: 'O3 + Shine & Glow Facial', isSelected: false },
    { id: 2, name: 'Pedicure (Ice Cream Bomb)', isSelected: false },
    { id: 3, name: 'Manicure (Ice Cream Bomb)', isSelected: false },
    { id: 4, name: 'Any Threading', isSelected: false },
    { id: 5, name: 'Face & Neck Bleach (Cheryls Bleach)', isSelected: false },
    { id: 6, name: 'Face & Neck De-tan (Raaga)', isSelected: false },
    { id: 7, name: 'Hair Spa (Loreal)', isSelected: false },
    { id: 8, name: 'Full Arm Waxing (Rica)', isSelected: false },
    { id: 9, name: 'Full Leg Waxin (Rica)', isSelected: false },
    { id: 10, name: 'Underarms Waxing (Rica)', isSelected: false },
    { id: 11, name: 'Bikini Wax (Rica)', isSelected: false },
    { id: 12, name: 'Bikini Wax (Brazillian Stripless Wax) ', isSelected: false },
    { id: 13, name: 'Back Massage', isSelected: false },
    { id: 14, name: 'Scalp Relaxing', isSelected: false }
  ]
  constructor(
    private _toastr: ToastrService,
    private _router: Router,
    private _offer:OfferService
  ) { }

  ngOnInit(): void {
  }


  onchangeBasicPackage(event: any) {
    this.itemSelected = this.basicPackage.filter(x => x.isSelected == true)
    this.selectedItemLength = this.itemSelected.length
    this.checkitem.push = this.itemSelected
  }
  basicPackageOrder() {
  if (this.selectedItemLength < 5) {
      this._toastr.error('please select atlest 5 item')
    }
    else if (this.selectedItemLength > 5) {
      this._toastr.error('please select mimimum 5 item')
    }
    else {
      this._offer.getAuth()
      const price=1350
      const servicename='basic'
      this._offer.getBasicOrder(this.itemSelected,price,servicename)
    }
  }
  onchangeStandardPackage(event: any) {
    this.itemSelected = this.standardPackage.filter(x => x.isSelected == true)
    this.selectedItemLength = this.itemSelected.length
    this.checkitem.push = this.itemSelected
  }
  standardPackageOrder() {
    if (this.selectedItemLength < 6) {
      this._toastr.error('please select atlest 6 item')
    }
    else if (this.selectedItemLength > 6) {
      this._toastr.error('please select mimimum 6 item')
    }
    else {
      this._toastr.success('add to cart')
    }
  }
  onchangePremiumPackage(event: any) {
    this.itemSelected = this.premiumPackage.filter(x => x.isSelected == true)
    this.selectedItemLength = this.itemSelected.length
    this.checkitem.push = this.itemSelected
  }
  premiumPackageOrder() {
    if (this.selectedItemLength < 7) {
      this._toastr.error('please select atlest 7 item')
    }
    else if (this.selectedItemLength > 7) {
      this._toastr.error('please select mimimum 7 item')
    }
    else {
      this._toastr.success('add to cart')
    }
  }
  onchangeGoldPackage(event: any) {
    this.itemSelected = this.goldPackage.filter(x => x.isSelected == true)
    this.selectedItemLength = this.itemSelected.length
    this.checkitem.push = this.itemSelected
  }
  goldPackageOrder() {
    if (this.selectedItemLength < 8) {
      this._toastr.error('please select atlest 8 item')
    }
    else if (this.selectedItemLength > 8) {
      this._toastr.error('please select mimimum 8 item')
    }
    else {
      this._toastr.success('add to cart')
    }
  }
  onchangePlatinumPackage(event: any) {
    this.itemSelected = this.platinumPackage.filter(x => x.isSelected == true)
    this.selectedItemLength = this.itemSelected.length
    this.checkitem.push = this.itemSelected
  }
  platinumPackageOrder() {
    if (this.selectedItemLength < 9) {
      this._toastr.error('please select atlest 9 item')
    }
    else if (this.selectedItemLength > 9) {
      this._toastr.error('please select mimimum 9 item')
    }
    else {
      this._toastr.success('add to cart')
    }
  }
  goToHome() {
    this._router.navigate(['/'])
  }
}
