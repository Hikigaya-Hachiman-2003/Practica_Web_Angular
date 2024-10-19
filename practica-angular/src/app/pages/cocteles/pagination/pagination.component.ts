import { Component } from '@angular/core';
import { Cocteles } from '../interfaces/cocteles';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';
import { CoctelesService } from '../services/cocteles.service';

@Component({
  selector: 'coctel-pagination',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  drinks: Cocteles | undefined;
  selectedLetter: string = 'a'; // Inicialmente muestra los cocteles con la letra 'a'

  constructor(private coctelesService: CoctelesService) {}

 // Cargar los cocteles de la letra 'a' por defecto 
  ngOnInit(): void {
    this.getDrinksByLetter(this.selectedLetter);
  }

  // Método para obtener cocteles según la letra seleccionada
  getDrinksByLetter(letter: string): void {
    this.selectedLetter = letter;
    this.coctelesService.getCoctelesPorLetra(letter).subscribe(
      response => {
        this.drinks = response || { drinks: null }; // Guarda la respuesta o muestra un array vacío si no hay cocteles
      },
      error => {
        console.error('Error fetching drinks:', error);
        this.drinks = { drinks: null }; // Maneja el error limpiando los resultados
      }
    );
  }

}
