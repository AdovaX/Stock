import { Component, OnInit } from '@angular/core';
import {MainserviceService} from '../Services/mainservice.service';
import {StockservicesService} from '../Services/stockservices.service';
@Component({
  selector: 'app-gainers',
  templateUrl: './gainers.component.html',
  styleUrls: ['./gainers.component.css']
})
export class GainersComponent implements OnInit {
  name: any;
  companies = [];
  displayedColumns: string[] = ['symbol', 'openPrice', 'highPrice', 'lowPrice', 'tradedQuantity'];
    constructor(private service: StockservicesService) {
     }
    ngOnInit(): void { 
      this.name = this.service.get_gainers().subscribe(data => {
       // console.log(JSON.stringify(data));
        this.companies = data;
      });
    }
  }
