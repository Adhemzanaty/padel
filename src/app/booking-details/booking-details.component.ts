import { Component } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-booking-details',
  standalone: false,
  templateUrl: './booking-details.component.html',
  styleUrl: './booking-details.component.css'
})
export class BookingDetailsComponent {

  constructor(public _APIService:APIService ) {

  }

}
