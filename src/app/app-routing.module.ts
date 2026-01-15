import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { pathGuard } from './path.guard';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BookStadiumComponent } from './book-stadium/book-stadium.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { LoginEmpComponent } from './login-emp/login-emp.component';
import { StoreComponent } from './store/store.component';
import { CaffeComponent } from './caffe/caffe.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '' , redirectTo: '/home' , pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'bookStadium' , component: BookStadiumComponent},
  {path: 'bookingDetails' , component: BookingDetailsComponent},
  {path: 'loginEmployee' , component: LoginEmpComponent},
  {path: 'login' , component: LoginUserComponent},
  {path: 'store' , component: StoreComponent},
  {path: 'caffe' , component: CaffeComponent},
  {path: 'dashboard' , component: DashboardComponent},


  {path: 'nav' , component: NavbarComponent},
  {path: 'privacyPolicy' , component: PrivacyPolicyComponent},
  {path: '**', redirectTo: '/home' }




];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash: true , scrollPositionRestoration: 'top' , anchorScrolling: 'enabled'} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
