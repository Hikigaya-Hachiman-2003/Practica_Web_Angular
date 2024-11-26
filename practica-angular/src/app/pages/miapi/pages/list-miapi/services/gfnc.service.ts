import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ejemplo, Gfnc, GfncAll } from '../interfaces/gfnc';

@Injectable({
  providedIn: 'root',
})
export class GfncService {
  private apiURLBase: string = 'http://localhost:3000/api/gfnc';

  constructor(private http: HttpClient) {}

  getGFNC(): Observable<GfncAll> {
    return this.http.get<GfncAll>(this.apiURLBase);
  }

  getGFNCById(termino: string): Observable<Gfnc> {
    return this.http.get<Gfnc>(`${this.apiURLBase}/${termino}`);
  }

  // Crear un nuevo registro
  createGFNC(gfnc: Ejemplo): Observable<Gfnc> {
    return this.http.post<Gfnc>(this.apiURLBase, gfnc);
  }

  // // Actualizar un registro
  // updateGFNC(id: string, data: Gfnc): Observable<Gfnc> {
  //   return this.http.put<Gfnc>(`${this.apiURLBase}/${id}`, data);
  // }

  //  Eliminar un registro
  deleteGFNC(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURLBase}/${id}`);
  }
}
