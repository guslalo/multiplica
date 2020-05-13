import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApisService {

  private urlColors = 'https://reqres.in/api/colors';

  constructor(private http: HttpClient) {
  
  }

  // get colors
  getColors(page:any): Observable<any> {
    return this.http.get<any>(this.urlColors + `?page=${page}`);
  }
 
  
}