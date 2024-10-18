import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coctel, Cocteles } from '../interfaces/cocteles';

@Injectable({
  providedIn: 'root'
})
export class CoctelesService {

  private apiURLBase: string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

  constructor(
    private http: HttpClient
  ) { }

  getCocteles(): Observable <Cocteles> {
    return this.http.get<Cocteles>(this.apiURLBase)
  }

  getcoctel(termino: string): Observable <Coctel> {
    return this.http.get<Coctel>(`${this.apiURLBase}/${termino}`)
  }
}
