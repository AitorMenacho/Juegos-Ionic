import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor(
    private http: HttpClient
  ) { }

  getStores(): Observable<any>{
    return this.http.get('https://api.rawg.io/api/stores?key=d28df9d5a27a4e9ca407e512d265aa17')
  }
}
