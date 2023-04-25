import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FiltradoService {

  constructor(
    private http: HttpClient
  ) { }

  getFiltrado(genres: any, platforms: any, rating: any, stores: any): Observable<any> {
    return this.http.get('https://api.rawg.io/api/games?key=d28df9d5a27a4e9ca407e512d265aa17&ordering=-rating&parent_platforms=' + platforms + '&stores=' + stores + '&genres=' + genres + '&rating_gt=' + rating )
  }
}
