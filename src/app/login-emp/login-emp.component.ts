import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-emp',
  standalone: false,
  templateUrl: './login-emp.component.html',
  styleUrl: './login-emp.component.css'
})
export class LoginEmpComponent {


  active: boolean = false;
  isMobile: boolean = false;

  constructor(public _APIService:APIService , private _Router:Router) {


  }  

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  sighnIn() {
    this.active = false;
    if (this.isMobile) {
      this.updateMobileButtons('signin');
    }
  }

  sighnUp() {
    this.active = true;
    if (this.isMobile) {
      this.updateMobileButtons('signup');
    }
  }

  updateMobileButtons(activeBtn: string) {
    const signInBtn = document.getElementById('mobileSignIn');
    const signUpBtn = document.getElementById('mobileSignUp');
    
    if (signInBtn && signUpBtn) {
      if (activeBtn === 'signin') {
        signInBtn.classList.add('active');
        signUpBtn.classList.remove('active');
      } else {
        signUpBtn.classList.add('active');
        signInBtn.classList.remove('active');
      }
    }
  }

  logIn(){

    this._APIService.checkLogin.next(true);
    this._Router.navigate(['/dashboard']);


  }

}
