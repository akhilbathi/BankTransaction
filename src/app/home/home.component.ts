import { Component, OnInit } from '@angular/core';
import { PassbookserviceService } from '../passbookservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(passbookservice:PassbookserviceService) { }

  token:string;
  
  ngOnInit() {
    this.token=localStorage.getItem("token");
    
  }

}
