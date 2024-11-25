import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Ejemplo, GfncElement } from '../interfaces/gfnc';
import { ModalComponent } from '../modal/modal.component';
import { GfncService } from '../services/gfnc.service';

@Component({
  selector: 'gfnc-card',
  standalone: true,
  imports: [NgIf, NgFor, ModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnChanges {
  @Input() public gfnccaracther: GfncElement[] | null = null;

  @ViewChild(ModalComponent) public modal!: ModalComponent;

  imageLoaded: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['gfnccaracther']) {
      //this.gfnccaracther = changes['gfnccaracther'].currentValue;
      this.imageLoaded = false;
    }
  }

  constructor(
    private gfncService: GfncService
  ) {}

  openModal(gfnccat: GfncElement): void {
    const id = gfnccat._id;

    this.gfncService.getGFNCById(id).subscribe((data) => {
      // Asegúrate de acceder a la propiedad 'ejemplo'
      const ejemplo: Ejemplo = data.ejemplo;
      this.modal.open(ejemplo); // Pasamos el objeto 'Ejemplo' al modal
    });
  }
}
