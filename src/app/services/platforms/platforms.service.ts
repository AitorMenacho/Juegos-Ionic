import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {

  constructor(
    private http: HttpClient
  ) { }

  getPlatforms(): Observable<any>{
    return this.http.get('https://api.rawg.io/api/platforms/lists/parents?key=d28df9d5a27a4e9ca407e512d265aa17')
  }
}
