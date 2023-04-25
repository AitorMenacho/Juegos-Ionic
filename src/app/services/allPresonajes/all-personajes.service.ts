import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AllPersonajesService {

  constructor(private http: HttpClient) { }

  getCharacters(page: any, nombre: any): Observable<any> {

    return this.http.get("https://api.rawg.io/api/games?key=d28df9d5a27a4e9ca407e512d265aa17&search=" + nombre + "&page=" + page)
  
  }

}
