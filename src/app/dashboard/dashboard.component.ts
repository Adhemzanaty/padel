// dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- أضف هذا

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule], // <-- أضف هذا
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // بيانات المستخدم
  user = {
    name: 'SuperAdmin',
    email: 'Super@gmail.com'
  };

  // بيانات الإحصائيات
  stats = {
    facilities: 1,
    acceptedStories: 1,
    underReview: 1,
    totalUsers: 4,
    totalStories: 2
  };

  // متغير للتحكم في الصفحة الحالية
  currentPage: string = 'الرئيسية';

  // وظيفة لتغيير الصفحة الحالية
  setCurrentPage(page: string) {
    this.currentPage = page;
  }

  // وظيفة لتسجيل الخروج
  logout() {
    alert('تم تسجيل الخروج بنجاح');
    // هنا يمكن إضافة منطق تسجيل الخروج الفعلي
  }
}