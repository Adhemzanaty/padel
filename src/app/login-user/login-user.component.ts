import { Component } from '@angular/core';

@Component({
  selector: 'app-login-user',
  standalone: false,
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {

  active: boolean = false;
  isMobile: boolean = false;

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
}
