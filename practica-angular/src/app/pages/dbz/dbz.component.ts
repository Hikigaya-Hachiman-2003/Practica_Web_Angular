import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { DragonBallZ } from './interfaces/dbz';
import { DbzService } from './services/dbz.service';

@Component({
  selector: 'app-dbz',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dbz.component.html',
  styleUrl: './dbz.component.css'
})
export class DbzComponent implements OnInit {

  dbzs: DragonBallZ | undefined

  constructor(
    private _srvDbz: DbzService
  ){}

  ngOnInit(): void {
    this._srvDbz.getDBZCS().subscribe( dbzAll => {
      dbzAll.items.forEach( item => {
        return item
        })
        this.dbzs = dbzAll
        
      })
  }
}
