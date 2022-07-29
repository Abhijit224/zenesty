import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  images = ['../../assets/bannerImages/1.jpg', '../../assets/bannerImages/2.jpeg', '../../assets/bannerImages/3.jpg']
  constructor() { }

  ngOnInit(): void {
  }

}
