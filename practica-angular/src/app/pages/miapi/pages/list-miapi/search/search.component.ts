import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gfnc-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() public eventSearch = new EventEmitter<string>();

  searchCaracther(termino: string | number):void{
    const termSearch = termino.toString().trim()
    if(termino.toString().length === 0){
      this.eventSearch.emit('');
      return;
    }
    console.log('Searching for:', termSearch);
    this.eventSearch.emit(termSearch);
  }

}
