import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {MainserviceService} from '../Services/mainservice.service';
import {StockservicesService} from '../Services/stockservices.service';
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
n: any = 0;
displayedColumns: string[] = ['no', 'name' , 'industry', 'symbol' , 'series' , 'isin'];
constructor(private service: StockservicesService) {}
  ngOnInit(): void {
    this.name = this.service.allCompanies().subscribe(data => {
    //  console.log(JSON.stringify(data.message));
      this.companies = data;
    });
  }
  searchstock(stock): void{
    //  this.service.search_stock(stock.target.value).subscribe(res => {
    //   console.log(res);
    // });
   }
}
