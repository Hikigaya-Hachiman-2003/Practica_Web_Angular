import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Ejemplo, Gfnc, GfncElement } from '../interfaces/gfnc';
import { ModalComponent } from '../modal/modal.component';
import { GfncService } from '../services/gfnc.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'gfnc-card',
  standalone: true,
  imports: [NgIf, NgFor, ModalComponent, FormsModule],
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

  // Método para eliminar un GFNC
  deleteGFNC(id: string): void {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este registro?');

    if (confirmDelete) {
      this.gfncService.deleteGFNC(id).subscribe(
        () => {
          alert('Registro eliminado con éxito.');
          // Actualizar la lista local de cards eliminando el elemento
          this.gfnccaracther = this.gfnccaracther!.filter((item) => item._id !== id);
        },
        (error) => {
          alert('Ocurrió un error al intentar eliminar el registro.');
          console.error(error);
        }
      );
    }
  }

  
}
