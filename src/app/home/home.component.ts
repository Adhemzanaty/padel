import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Router } from 'express';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


  

  constructor(public _APIService:APIService ) {


  }  

  ngOnInit(): void {
    this.loadingTimer();



  }


  loadingTimer() : void{

   
  }


}
