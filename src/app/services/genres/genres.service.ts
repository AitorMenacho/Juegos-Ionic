import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(
    private http: HttpClient
  ) { }

  getGenres(): Observable<any> {
    return this.http.get('https://api.rawg.io/api/genres?key=d28df9d5a27a4e9ca407e512d265aa17')
  }

}
