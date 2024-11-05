import { Component, OnInit } from '@angular/core';
import { Cocteles } from './interfaces/cocteles';
import { CoctelesService } from './services/cocteles.service';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-cocteles',
  standalone: true,
  imports: [PaginationComponent, SearchComponent],
  templateUrl: './cocteles.component.html',
  styleUrl: './cocteles.component.css'
})
export class CoctelesComponent implements OnInit{

  cocteles: Cocteles | undefined


  constructor(
    private _srvCocteles: CoctelesService
  ){}

  ngOnInit(): void {
    this.cargarCocteles();
    }

    cargarCocteles(): void {
      this._srvCocteles.getCoctelesPorLetra().subscribe(coctelesAll => {
        this.cocteles = coctelesAll;
      });
    }

    buscarCocteles(nombre: string): void {
      if(nombre.trim()=== ''){
        this.cargarCocteles();
      }else{
        this._srvCocteles.getCoctelPorNombre(nombre).subscribe(coctelesbuscar => {
          console.log('Resultados de la API:', coctelesbuscar );
          this.cocteles = coctelesbuscar
        })
      }
    }
  }



