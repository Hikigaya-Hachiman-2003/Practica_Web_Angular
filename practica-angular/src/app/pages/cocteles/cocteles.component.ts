import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Cocteles } from './interfaces/cocteles';
import { CoctelesService } from './services/cocteles.service';

@Component({
  selector: 'app-cocteles',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cocteles.component.html',
  styleUrl: './cocteles.component.css'
})
export class CoctelesComponent implements OnInit{

  cocteles: Cocteles | undefined

  constructor(
    private _srvCocteles: CoctelesService
  ){}

  ngOnInit(): void {
    this._srvCocteles.getCocteles().subscribe(coctelesAll => {
      
      
      this.cocteles = coctelesAll
      // console.log(this.cocteles)
      })
    }
  }



