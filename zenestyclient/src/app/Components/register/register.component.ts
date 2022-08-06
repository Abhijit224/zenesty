import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/AppServices/user.service';

import { User } from 'src/app/DatabaseModal/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 newUser= new User('','','','',0,'','','','')

  constructor(
   private _userService:UserService
  ) { }

  ngOnInit(): void {
   
  }
  checkPassword(){
    const p=this.newUser.userPassword1
    const cp=this.newUser.userPassword2
    if(p===cp){
      return true
  }
    else{
      return false
    }
  }
  checkEmail(email:any){
    this._userService.checkUser(email)
  }
  registerUser(){
    console.log(this.newUser)
      this._userService.getRegister(this.newUser)
  }

}
