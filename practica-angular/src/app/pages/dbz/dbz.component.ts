import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { DragonBallZ } from './interfaces/dbz';
import { DbzService } from './services/dbz.service';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-dbz',
  standalone: true,
  imports: [CardComponent, PaginacionComponent, SearchComponent],
  templateUrl: './dbz.component.html',
  styleUrl: './dbz.component.css',
})
export class DbzComponent implements OnInit {
  dbzs: DragonBallZ | undefined;

  constructor(private _srvDbz: DbzService) {}

  ngOnInit(): void {
    this._srvDbz.getDBZCS().subscribe((dbzAll) => {
      // dbzAll.items.map((item) => {
        // item;
        this._srvDbz.nextURL = dbzAll.links.next;
        this._srvDbz.previousURL = dbzAll.links.previous;
        this._srvDbz.lastURL = dbzAll.links.last;
        this._srvDbz.firstURL = dbzAll.links.first;
      // });
      this.dbzs = dbzAll;
    });
  }

  setNewDBZCaracther(dbzsNews: DragonBallZ): void {
    this.dbzs = dbzsNews;
  }

  searchDbzCaracther(termino: string): void {
    if (termino.trim().length > 0) {
      this._srvDbz.getDBZC(termino).subscribe((dbz) => {
        const originPlanetImage = dbz.originPlanet?.image || ''; // Valor predeterminado vacío si es undefined
        const originPlanetName = dbz.originPlanet?.name || 'Desconocido'; // Valor predeterminado si es undefined
        

        this.dbzs = {
          items: [
            {
              name: dbz.name,
              image: dbz.image,
              race: dbz.race,
              id: dbz.id,
              gender: dbz.gender,
              ki: dbz.ki,
              maxKi: dbz.maxKi,
              description: dbz.description,
              affiliation: dbz.affiliation,
              originPlanet: {
                id: dbz.originPlanet?.id || 0, // Valor predeterminado si es undefined
                name: originPlanetName,
                image: originPlanetImage,
                deletedAt: dbz.originPlanet?.deletedAt || null,
                isDestroyed: dbz.originPlanet?.isDestroyed || false, // Valor predeterminado si es undefined
                description:
                  dbz.originPlanet?.description || 'Descripción no disponible',
              },
              deletedAt: dbz.deletedAt,
              transformations: dbz.transformations,
            },
          ],
          meta: {
            totalItems: 1,
            itemCount: 1,
            itemsPerPage: 1,
            totalPages: 1,
            currentPage: 1,
          },
          links: {
            first: '',
            previous: '',
            next: '',
            last: '',
          },
        };
        this._srvDbz.nextURL = null;
        this._srvDbz.previousURL = null;
      });
      return;
    } else {
      this.ngOnInit();
    }
  }
}
