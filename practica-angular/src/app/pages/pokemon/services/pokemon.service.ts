import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon, Pokemons } from '../interfaces/pokemons';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrlBase: string = "https://pokeapi.co/api/v2/pokemon/";
  private next: string |null = null;
  private previous: string |null = null;

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(url: string = this.apiUrlBase ): Observable<Pokemons> {
    return this.http.get<Pokemons>(url);
  }
  getpokemon(termino: string | number): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.apiUrlBase}${termino}`);
  }

  set nextURL(url: string | null){
    this.next = url;
  }

  set previousURL(url: string | null){
    this.previous = url;
  }

  get nextURL(): string | null{
    return this.next;
  }

  get previousURL(): string | null{
    return this.previous;
  }
}
