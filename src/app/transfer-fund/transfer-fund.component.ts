import { Component, OnInit } from '@angular/core';
import { TransferfundForm } from '../transferfund-form';

import { PassbookserviceService } from '../passbookservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.css']
})
export class TransferFundComponent implements OnInit {
  
  transferfundform:TransferfundForm = new TransferfundForm();

  msg:string;
  errorMsg:string;
  tform:any;
  form:NgForm;

  constructor(private service:PassbookserviceService, private router:Router,private route:ActivatedRoute)
   { }

  ngOnInit(): void {
  }

  transferFund(){
    this.service.doTxn(this.transferfundform).subscribe(data=>{console.log(data);
      this.msg=data.message;this.errorMsg=undefined},
       error=>{ console.log(error);this.errorMsg=error.error.message; this.msg=undefined}
     );
    }
 

}
