import { Component } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-book-stadium',
  standalone: false,
  templateUrl: './book-stadium.component.html',
  styleUrl: './book-stadium.component.css'
})
export class BookStadiumComponent {




  constructor(public _APIService:APIService ) {

  }
}
