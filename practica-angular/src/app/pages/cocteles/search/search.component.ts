import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cocteles-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() public eventSearchCoctel = new EventEmitter<string>()

  buscarCoctel(nombre: string):void{
    const termSearchCoctel = nombre.toString().trim()
      if(nombre.toString().length === 0) {
        return
      }
      console.log('Searching for:', termSearchCoctel);
    this.eventSearchCoctel.emit(termSearchCoctel)
  }



}
