import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coctel, Cocteles } from '../interfaces/cocteles';

@Injectable({
  providedIn: 'root'
})
export class CoctelesService {

  private apiURLBase: string = 'https://www.thecocktaildb.com/api/json/v1/1'

  constructor(
    private http: HttpClient
  ) { }

  getCoctelesPorLetra(letra: string = 'a'): Observable <Cocteles> {
    return this.http.get<Cocteles>(`${this.apiURLBase}/search.php?f=${letra}`)
  }

  getCoctelPorNombre(nombre: string): Observable <Cocteles> {
    return this.http.get<Cocteles>(`${this.apiURLBase}/search.php?s=${nombre}`)
  }
}
