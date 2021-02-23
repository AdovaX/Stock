import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})


export class MainserviceService {

 API: any = 'http://localhost:8089/api';

  constructor(private http: HttpClient) { }
  get_gainers(): Observable<any>{
    return this.http.get(this.API);
  }
  get_all(): Observable<any>{
   const link  = this.API + '/all';
   return this.http.get(link);
  }
  search_stock(stockvalue): Observable<any>{
   const link  = this.API + '/search';
   const data = {search: stockvalue};
   return this.http.post(link, data);
    }
}
