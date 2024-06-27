import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})

export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public user: number = 0;
  public pass: string = '';



  constructor(
    public LoginService: LoginService,
    public formBuilder: FormBuilder,
    private router: Router
  ){
    this.loginForm= this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  public logIn(): void{
    if (this.loginForm.valid){
      const user = this.loginForm.get('user')?.value;
      const pass = this.loginForm.get('pass')?.value;
      this.LoginService
      .login(user, pass)
      .subscribe(
        auth => {
          if (auth == 0) {
            this.router.navigateByUrl('home')
          }
          else if (auth == 1) {
            alert("We're Sorry.\nThe Password is incorrect.")
          }
          else {
            alert("We're Sorry.\nThe account that you tried to log in may be inactive, locked, or non-existent.\nPlease check your DNI and password, and try to log in again or ask Customer Service for assistance.\nThank you.")
          }
        }
      )
    }
    else {
      alert ("We're sorry!\nbut a valid DNI and Password is required to login.\nPlease check your DNI and password, and try to log in again.\nThank you.")
    }
    

  }

  public register() {
    this.router.navigateByUrl('register')
  }

  
    

  ngOnInit() {
  }

  

}
