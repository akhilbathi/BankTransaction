import { Component, OnInit } from '@angular/core';
import { PassbookserviceService } from '../passbookservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Acctransaction } from '../acctransaction';
import { Account } from '../account';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  accountId:string;
  acctxn:Acctransaction[]=[];
  msg:string;
  acc:Account;



 

  constructor(private passbookService:PassbookserviceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit()  { 
    
  }

    searchById(){
      this.passbookService.viewbyID(this.accountId).subscribe(data=>{
        this.acctxn=data,this.msg=undefined}, error=>{console.log(error); this.msg=error.error.message;this.acctxn=null}
      ) 
  };
    

     

 
}
