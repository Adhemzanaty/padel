import { Component, OnInit, HostListener, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { APIService } from '../api.service';
import { Router, NavigationEnd } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';
import { throttleTime, filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit, OnDestroy {
  countryCode: any;
  currencyCode: any;
  countryies: any;
  checkLogin: any;

  
  isScrolled = false;
  private scrollSubscription: Subscription | null = null;
  private routerSubscription: Subscription | null = null;
  
  // متغير لتحديد إذا كنا في الصفحة الرئيسية أم لا
  isHomePage: boolean = false;

  constructor(
    private _APIService: APIService,
    private _Router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

    _APIService.checkLogin.subscribe( (x) => {
      this.checkLogin = x;
    } );
  }

  ngOnInit(): void {
    // الاشتراك في تغيير المسار (route)
    this.routerSubscription = this._Router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.checkCurrentPage(event.url);
      });

    // التحقق من الصفحة الحالية عند التحميل
    this.checkCurrentPage(this._Router.url);

    // باقي الكود كما هو...
   

    if (isPlatformBrowser(this.platformId)) {
      this.checkScrollOnInit();
      this.setupScrollListener();
    }
  }

  // دالة للتحقق من الصفحة الحالية
  private checkCurrentPage(url: string) {
    // تحقق إذا كنا في الصفحة الرئيسية
    this.isHomePage = url === '/' || 
                     url === '/home' || 
                     url.startsWith('/#') || 
                     url === '';
    
    console.log('Current page:', url, 'Is home:', this.isHomePage);
    
    // إذا لم نكن في الصفحة الرئيسية، اجعل النافبار أبيض دائماً
    if (!this.isHomePage) {
      this.isScrolled = true;
    } else {
      // إذا عدنا للصفحة الرئيسية، تحقق من موضع السكرول
      this.checkScrollOnInit();
    }
  }

  private checkScrollOnInit() {
    // فقط إذا كنا في الصفحة الرئيسية
    if (!this.isHomePage) {
      this.isScrolled = true;
      return;
    }
    
    setTimeout(() => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
      this.isScrolled = scrollPosition > 10;
    }, 0);
  }

  private setupScrollListener() {
    // اشترك في حدث السكرول فقط إذا كنا في المتصفح
    if (!isPlatformBrowser(this.platformId)) return;
    
    this.scrollSubscription = fromEvent(window, 'scroll')
      .pipe(throttleTime(20))
      .subscribe(() => {
        this.handleScroll();
      });
  }

  @HostListener('window:scroll', [])
  handleScroll() {
    // إذا لم نكن في الصفحة الرئيسية، لا تفعل شيئاً
    if (!this.isHomePage) return;
    
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
      this.isScrolled = scrollPosition > 10;
    }
  }

  // دالة مساعدة لإعادة تعيين عند الضغط على زر للصفحة الرئيسية
  resetNavbar() {
    // فقط إذا كنا في الصفحة الرئيسية
    if (this.isHomePage) {
      this.isScrolled = false;
    }
  }

  // دالة للانتقال للصفحة الرئيسية
  goToHome() {
    this._Router.navigate(['/']);
    this.isScrolled = false;
  }

  // دالة للانتقال لصفحات أخرى
  navigateToPage(route: string) {
    this._Router.navigate([route]);
    // عند الانتقال لصفحة أخرى، اجعل النافبار أبيض
    this.isScrolled = true;
  }

  ngOnDestroy() {
    // تنظيف الاشتراكات
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
    
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  scrollToBottom(): void {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }



  logOut(){
    this._APIService.checkLogin.next(false);
    this._Router.navigate(['/loginEmployee']);
  }
}