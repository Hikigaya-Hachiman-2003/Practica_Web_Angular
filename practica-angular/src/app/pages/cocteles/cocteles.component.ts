import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Cocteles } from './interfaces/cocteles';
import { CoctelesService } from './services/cocteles.service';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-cocteles',
  standalone: true,
  imports: [CardComponent, PaginationComponent, SearchComponent],
  templateUrl: './cocteles.component.html',
  styleUrl: './cocteles.component.css'
})
export class CoctelesComponent implements OnInit{

  cocteles: Cocteles | undefined


  constructor(
    private _srvCocteles: CoctelesService
  ){}

  ngOnInit(): void {
    this._srvCocteles.getCoctelesPorLetra().subscribe(coctelesAll => {
      
      
      this.cocteles = coctelesAll
      // console.log(this.cocteles)
      })
    }

    buscarCocteles(nombre: string): void {
      this._srvCocteles.getCoctelPorNombre(nombre).subscribe(coctelesbuscar => {
        this.cocteles = {
          drinks: [
          ]

        }
      })
    }
  }



