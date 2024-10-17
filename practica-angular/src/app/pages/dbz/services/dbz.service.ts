import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private apiURLBase: string = 'http://dragonball-api.com/api-docs';
  constructor() {
    private http: HttpClient
   }
}
