import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HairService } from 'src/app/AppServices/hair.service';
interface hair{
  id: number,
  isSelected: boolean,
  name: string,
  time: number,
  price: number
}
@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.css']
})
export class HairComponent implements OnInit {
  itemSelected: any
  checkitem: hair[] = []
  info: any
  ProfileData$: any
  servicename:any
  totalprice=0;
  totaltime=0;
  
  hairColouring=[]=[
    {id:1,name:'Root Touchup',description:'',time:30,price:200,isSelected:false},
    {id:2,name:'Global Colour', description:'up to shoulder',time:60,price:1700,isSelected:false},
    {id:3,name:'Global Colour', description:'up to Elbow',time:70,price:2300,isSelected:false},
    {id:4,name:'Global Colour', description:'up to waist',time:80,price:3000,isSelected:false},
    {id:5,name:'Heena Mehendi', description:'up to Elbow',time:30,price:250,isSelected:false},
    {id:6,name:'Heena Mehendi', description:'up to Waist',time:30,price:250,isSelected:false},
  ]
  hairCut=[]=[
    {id:1,name:'Straight Hair Cut',description:'',time:30,price:200,isSelected:false},
    {id:2,name:'U Cut',description:'',time:30,price:250,isSelected:false},
    {id:3,name:'V Cut',description:'',time:30,price:300,isSelected:false},
    {id:4,name:'Step Cut',description:'',time:45,price:400,isSelected:false},
    {id:5,name:'Layer Cut',description:'',time:45,price:450,isSelected:false},
    {id:6,name:'Hair Wash',description:'',time:20,price:200,isSelected:false},
  ]
  hairSpa=[]=[
    {id:1,name:'Hair Spa',description:'up to Neck',time:45,price:500,isSelected:false},
    {id:2,name:'Hair Spa',description:'up to Elbows',time:50,price:750,isSelected:false},
    {id:3,name:'Hair Spa',description:'up to Waist',time:60,price:1000,isSelected:false},
  ]
  constructor(
    private _hairService:HairService,
    private _toastr:ToastrService,
  ) { }

  ngOnInit(): void {
  }
  
  onchange(e:any){
    if (e.checked == true) {
    switch(this.servicename){
      case 'Hair Colouring':{
        this.itemSelected = this.hairColouring.filter(x => x.isSelected == true)
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
      case 'Hair Cutting':{
        this.itemSelected = this.hairCut.filter(x => x.isSelected == true)
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
      case 'Hair Spa':{
        this.itemSelected = this.hairSpa.filter(x => x.isSelected == true)
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
serviceName(ser:any){
  this.servicename=ser
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
  console.log(this.itemSelected)
  if (this.itemSelected === undefined) {
    this._toastr.warning('Please select anything')
  } else {
    this._toastr.success('Thank you for choose this services..')
    this._hairService.getOrder(this.itemSelected, this.totalprice, this.totaltime, this.servicename)
  }
}
}




