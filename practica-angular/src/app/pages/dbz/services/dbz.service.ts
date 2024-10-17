import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DragonBallZ, Item, } from '../interfaces/dbz';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private apiURLBase: string = 'https://dragonball-api.com/api/characters';
  
  private next: string | null = null
  private previous: string | null = null
  private first: string | null = null
  private last: string | null = null

  constructor(
    private http: HttpClient
  ) {   }

  getDBZCS(url:string = this.apiURLBase): Observable <DragonBallZ>{
    return this.http.get<DragonBallZ>(url);
  }

  getDBZC(termino: string | number): Observable <Item>{
    return this.http.get<Item>(`${this.apiURLBase}/${termino}`);
  }

  set nextURL(url: string | null){
    this.next = url
  }

  set previousURL(url: string | null){
    this.previous = url
  }

  set firstURL(url: string | null){
    this.first = url
  }

  set lastURL(url: string | null){
    this.last = url
  }


  
  get nextURL(): string | null{
    return this.next
  }

  get previousURL(): string | null{
    return this.previous
  }

  get firstURL(): string | null{
    return this.first
  }

  get lastURL(): string | null{
    return this.last
  }


  
}
