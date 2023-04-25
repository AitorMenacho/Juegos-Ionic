import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacter(id: any): Observable<any> {
    return this.http.get('https://api.rawg.io/api/games/' + id + '?key=d28df9d5a27a4e9ca407e512d265aa17')
  }

  getTrailer(id: any): Observable<any> {
    return this.http.get('https://api.rawg.io/api/games/' + id + '/movies?key=d28df9d5a27a4e9ca407e512d265aa17')
  }

  getShop(id: any): Observable<any> {
    return this.http.get('https://api.rawg.io/api/games/' + id + '/stores?key=d28df9d5a27a4e9ca407e512d265aa17')
  }

  getImagenes(id: any): Observable<any> {
    return this.http.get('https://api.rawg.io/api/games/' + id + '/screenshots?key=d28df9d5a27a4e9ca407e512d265aa17')
  }

  getDLC(id: any): Observable<any> {
    return this.http.get('https://api.rawg.io/api/games/' + id + '/additions?key=d28df9d5a27a4e9ca407e512d265aa17')
  }

}
