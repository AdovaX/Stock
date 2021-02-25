import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { StockservicesService } from '../Services/stockservices.service';
 
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
}) 
export class DetailsComponent implements OnInit {
  data: any;
  Symbol: any;
  CData: any;
  id: any;
  na: any;
  StockPE: any;
  Roe: any;
  Roce: any;
  MarketCap: any;
  FaceValue: any;
  DividendYield: any;
  CurrentPrice: any;
  BookValue: any;

  constructor(private router: Router , private Service: StockservicesService) {
  this.Symbol = this.router.getCurrentNavigation().extras.state;
  if (!this.Symbol){
  this.router.navigate(['/']);
}else{
  this.id = this.Symbol.id;
}
  }
  ngOnInit(): void {
    this.data = this.Service.get_data(this.id).subscribe(data => {
      this.Symbol = data.Symbol;
      this.StockPE = data.StockPE;
      this.Roe = data.Roe;
      this.Roce = data.Roce;
      this.MarketCap = data.MarketCap;
      this.FaceValue = data.FaceValue;
      this.DividendYield = data.DividendYield;
      this.CurrentPrice = data.CurrentPrice;
      this.BookValue = data.BookValue;
    });
   }

}
