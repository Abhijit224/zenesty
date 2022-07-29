import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/AppServices/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogin$:boolean=false
  constructor(
    private _auth:UserService,
    private _router:Router
  ) { }

  ngOnInit(): void {
   if(this._auth.Token$===undefined||null){
    this._router.navigate(['/login'])
   }
   this._router.navigate([''])
  }

}
