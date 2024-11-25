import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gfnc, GfncAll } from '../interfaces/gfnc';

@Injectable({
  providedIn: 'root'
})
export class GfncService {
  private apiURLBase: string = 'http://localhost:3000/api/gfnc';

  constructor(
    private http: HttpClient
  ) { }

  getGFNC(): Observable<GfncAll>{
    return this.http.get<GfncAll>(this.apiURLBase);
  }

  getGFNCById(termino: string): Observable<Gfnc>{
    return this.http.get<Gfnc>(`${this.apiURLBase}/${termino}`);
  }
}
