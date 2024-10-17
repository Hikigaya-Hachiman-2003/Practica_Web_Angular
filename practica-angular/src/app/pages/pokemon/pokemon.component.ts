import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { PokemonService } from './services/pokemon.service';
import { Pokemons } from './interfaces/pokemons';
import { PaginacionComponent } from './paginacion/paginacion.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CardComponent, PaginacionComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  pokemons: Pokemons | undefined;

  constructor (
    private _srvPokemon: PokemonService
  ) {}

  ngOnInit(): void {
    this._srvPokemon.getPokemons().subscribe((pokemonsAll) => {
      pokemonsAll.results.forEach((pokemon) => {
        this._srvPokemon.getpokemon(pokemon.name).subscribe((pokemonData) => {
          pokemon.data = pokemonData;
          this._srvPokemon.nextURL = pokemonsAll.next;
          this._srvPokemon.previousURL = pokemonsAll.previous;
        })
      })
      this.pokemons = pokemonsAll;
      console.log(this.pokemons)
    })
  }

  setNewPokemon(pokemonsnews: Pokemons) {
    this.pokemons = pokemonsnews;
  }

}
