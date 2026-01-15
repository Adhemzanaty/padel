import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-store',
  standalone: false,
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements AfterViewInit, OnDestroy {
  
  @ViewChild('fixedBox') fixedBox!: ElementRef;
  @ViewChild('smallBox') smallBox!: ElementRef;
  @ViewChild('closeBtn') closeBtn!: ElementRef;
  
  private touchStartX = 0;
  private touchEndX = 0;
  private readonly swipeThreshold = 50;

  // ✅ الطريقة الصحيحة في Angular - methods داخل class
  openAlert(): void {
    this.fixedBox.nativeElement.style.display = "flex";
  }

  closeAlert(): void {
    this.fixedBox.nativeElement.style.display = "none";
  }

  ngAfterViewInit(): void {
    this.initializeCarouselEvents();
  }

  ngOnDestroy(): void {
    this.removeCarouselEvents();
  }

  // ✅ method للكاروسيل
  private initializeCarouselEvents(): void {
    const carouselElement = document.querySelector('.main-carousel');
    
    if (carouselElement) {
      // ✅ استخدم arrow function للحفاظ على this
      carouselElement.addEventListener('touchstart', (e: Event) => {
        this.handleTouchStart(e as TouchEvent);
      });
      
      carouselElement.addEventListener('touchend', (e: Event) => {
        this.handleTouchEnd(e as TouchEvent);
      });
    }
  }

  private removeCarouselEvents(): void {
    // تنظيف الأحداث إذا لزم الأمر
  }

  // ✅ methods للتعامل مع اللمس
  private handleTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  private handleTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  // ✅ method للسحب
  private handleSwipe(): void {
    if (this.touchStartX - this.touchEndX > this.swipeThreshold) {
      this.navigateCarousel(1);
    } else if (this.touchEndX - this.touchStartX > this.swipeThreshold) {
      this.navigateCarousel(-1);
    }
  }

  // ✅ method للتنقل
  navigateCarousel(direction: number): void {
    const inputs = document.querySelectorAll<HTMLInputElement>('input[name="carousel-control"]');
    const currentIndex = Array.from(inputs).findIndex(input => input.checked);
    
    if (currentIndex !== -1) {
      let nextIndex = currentIndex + direction;
      
      if (nextIndex < 0) {
        nextIndex = inputs.length - 1;
      } else if (nextIndex >= inputs.length) {
        nextIndex = 0;
      }
      
      inputs[nextIndex].checked = true;
      
      const carousel = document.querySelector<HTMLElement>('.slides-wrapper');
      if (carousel) {
        carousel.style.transition = 'transform 0.4s ease-in-out';
      }
    }
  }

  // ✅ methods يمكن استدعاؤها من القالب
  nextSlide(): void {
    this.navigateCarousel(1);
  }

  prevSlide(): void {
    this.navigateCarousel(-1);
  }
}