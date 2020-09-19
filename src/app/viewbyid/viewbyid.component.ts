import { Component, OnInit } from '@angular/core';
import {PassbookserviceService} from'../passbookservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Acctransaction} from '../acctransaction';

@Component({
  selector: 'app-viewbyid',
  templateUrl: './viewbyid.component.html',
  styleUrls: ['./viewbyid.component.css']
})
export class ViewbyidComponent implements OnInit {

  accountId:string;
  acctxn:Acctransaction[]=[];
  msg:string;




 

  constructor(private passbookService:PassbookserviceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit()  { 
    
  }

    searchById(){
      this.passbookService.viewbyID(this.accountId).subscribe(data=>{
        this.acctxn=data,this.msg=undefined}, error=>{console.log(error); this.msg=error.error.message;this.acctxn=null}
      ) 
  };
    

     

 
}
