import { Component, OnInit } from '@angular/core';
import { PassbookserviceService } from '../passbookservice.service';

@Component({
  selector: 'app-viewaccountdetailsafteraddingloan',
  templateUrl: './viewaccountdetailsafteraddingloan.component.html',
  styleUrls: ['./viewaccountdetailsafteraddingloan.component.css']
})
export class ViewaccountdetailsafteraddingloanComponent implements OnInit {

  accounts: Account[]=[];
  msg:string;
  userName=this.loanService.userName;
  searchstrcustid:string="";
  constructor(private loanService:PassbookserviceService) { }

  ngOnInit(): void {
    this.loanService.viewAccounts().subscribe(data=>{this.accounts=data,this.msg=undefined},
    error=>this.msg=error.error.message);
  }
}