import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { GfncAll } from './interfaces/gfnc';
import { GfncService } from './services/gfnc.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'miapi-list-miapi',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './list-miapi.component.html',
  styleUrl: './list-miapi.component.css',
})
export class ListMiapiComponent implements OnInit {
  gfncs: GfncAll | null = null; // Inicializamos como null

  constructor(private _srvGFNC: GfncService) {}

  ngOnInit(): void {
    this._srvGFNC.getGFNC().subscribe((gfncAll) => {
      this.gfncs = gfncAll; // Asignamos los datos una vez cargados
      console.log(this.gfncs);
    });
  }

  
}

