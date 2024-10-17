import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DragonBallZ, Item } from '../interfaces/dbz';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private apiURLBase: string = 'https://dragonball-api.com/api/characters';
  constructor(
    private http: HttpClient
  ) {   }

  getDBZCS(): Observable <DragonBallZ>{
    return this.http.get<DragonBallZ>(this.apiURLBase);
  }

  getDBZC(termino: string | number): Observable <Item>{
    return this.http.get<Item>(`${this.apiURLBase}${termino}`);
  }
}
