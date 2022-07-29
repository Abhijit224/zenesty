import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/AppServices/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  error: any
  user: any
  router: any;
  
  constructor(
    private _router:Router,
    private _auth:UserService,
   
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  loginUser(form:FormGroup)
  {
    this._auth.authservice(form.value.email,form.value.password)
   
  }


}
