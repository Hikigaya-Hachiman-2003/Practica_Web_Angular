import { Component, EventEmitter, Output } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { NgClass } from '@angular/common';
import { DragonBallZ } from '../interfaces/dbz';

@Component({
  selector: 'dbz-paginacion',
  standalone: true,
  imports: [NgClass],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.css'
})
export class PaginacionComponent {

  @Output() public eventNewDragonBallCaracther = new EventEmitter<DragonBallZ>();

  constructor(
    private _srvDbz: DbzService
  ){}

  get nextURL(): string | null{
    return this._srvDbz.nextURL
  }

  get previousURL(): string | null{
    return this._srvDbz.previousURL
  }
  
  get lastURL(): string | null{
    return this._srvDbz.lastURL
  }

  get firstURL(): string | null{
    return this._srvDbz.firstURL
  }

  loadPagDBZS(url: string){
    this._srvDbz.getDBZCS(url).subscribe( dbzAll => {
      dbzAll.items?.forEach( item => {
        return item
      })
      this._srvDbz.nextURL = dbzAll.links.next
      this._srvDbz.previousURL = dbzAll.links.previous
      this._srvDbz.lastURL = dbzAll.links.last
      this._srvDbz.firstURL = dbzAll.links.first
      this.eventNewDragonBallCaracther.emit(dbzAll)
    })
    this._srvDbz.getDBZCS()  
  }
}
