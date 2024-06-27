/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './Login.component';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let router: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loginService = TestBed.inject(LoginService);
    router = TestBed.inject(Router);
  });

  it('has user and password in the form', () => {
    expect(component.loginForm.contains('user')).toBeTruthy()
    expect(component.loginForm.contains('pass')).toBeTruthy()
  })

  it('User is Required', () => {
    const user = component.loginForm.get('user')
    if(user){
      user.setValue('')
      expect(user.valid).toBeFalsy()
    } else {
      fail('The User is Required')
    }
  })

  it('Password is Required', () => {
    const user = component.loginForm.get('pass')
    if(user){
      user.setValue('')
      expect(user.valid).toBeFalsy()
    } else {
      fail('The Password is Required')
    }
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
