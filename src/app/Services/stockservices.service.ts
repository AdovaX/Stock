import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StockservicesService {

  API: any = 'http://localhost:4247';
  constructor(private http: HttpClient) { }
  allCompanies(): Observable<any>{
    return this.http.get(this.API + '/allcompanies');
   }
   search_stock(stockvalue): Observable<any>{
    const link  = this.API + '/search';
    const data = {company: stockvalue};
    return this.http.post(link, data);
     }
     get_gainers(): Observable<any>{
      return this.http.get(this.API + '/gainers');
    }
    get_losers(): Observable<any>{
     return this.http.get(this.API + '/losers');
   }
   get_data(code): Observable<any>{
    const link  = this.API + '/Datasearch';
    const data = {Symbol: code};
    return this.http.post(link, data);
  }
 }
