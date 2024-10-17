import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { DragonBallZ } from './interfaces/dbz';
import { DbzService } from './services/dbz.service';
import { PaginacionComponent } from './paginacion/paginacion.component';


@Component({
  selector: 'app-dbz',
  standalone: true,
  imports: [CardComponent, PaginacionComponent],
  templateUrl: './dbz.component.html',
  styleUrl: './dbz.component.css',
})
export class DbzComponent implements OnInit {
  dbzs: DragonBallZ | undefined;

  constructor(private _srvDbz: DbzService) {}

  ngOnInit(): void {
    this._srvDbz.getDBZCS().subscribe((dbzAll) => {
      dbzAll.items.forEach((item) => {
        return item;
      });
      this._srvDbz.nextURL = dbzAll.links.next;
      this._srvDbz.previousURL = dbzAll.links.previous;
      this._srvDbz.lastURL = dbzAll.links.last;
      this._srvDbz.firstURL = dbzAll.links.first;
      this.dbzs = dbzAll;
    });
  }

  setNewDBZCaracther(dbzsNews: DragonBallZ): void {
    this.dbzs = dbzsNews;
  }

  searchDbzCar(termino: string): void {
    // if(termino){
    //   this._srvDbz.getDBZCS(termino).subscribe((dbzAll) => {
    //     this.dbzs = {
    //       meta: dbzAll.meta,
    //       items: dbzAll.items,
    //       links: dbzAll.links,
    //     }
    //     this._srvDbz.nextURL = null;
    //     this._srvDbz.previousURL = null;
    //   });
    // }else{
    //   this.ngOnInit()
    // }
  }
}
