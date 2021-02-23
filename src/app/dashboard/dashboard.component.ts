import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {MainserviceService} from '../Services/mainservice.service';
export interface Company {
  name: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
name: any;
searchdata: any;
companies = [];
displayedColumns: string[] = ['symbol','series', 'openPrice', 'highPrice', 'lowPrice', 'tradedQuantity'
, 'lastCorpAnnouncementDate' , 'lastCorpAnnouncement'];
constructor(private service: MainserviceService) {}
  ngOnInit(): void {
    this.name = this.service.get_all().subscribe(data => {
    //  console.log(JSON.stringify(data.message));
      this.companies = data.message.data;
    });
  }
  searchstock(stock): void{
     this.service.search_stock(stock.target.value).subscribe(res => {
      console.log(res);
    });
   }
}
