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
    const link  = this.API + '/allcompanies';
    return this.http.get(link);
   }
}
