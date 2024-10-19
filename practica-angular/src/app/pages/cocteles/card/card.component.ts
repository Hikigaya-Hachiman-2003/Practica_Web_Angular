import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Coctel, Cocteles } from '../interfaces/cocteles';
import { NgFor, NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'cocteles-card',
  standalone: true,
  imports: [NgIf, NgFor, ModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnChanges{

  @Input() public coctelesTodos: Cocteles | undefined;

  @ViewChild(ModalComponent) public modal!: ModalComponent

  imageLoaded: boolean = false;

  selectedCoctel!: Coctel

  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes['coctelesTodos']){
      if(changes['coctelesTodos'].currentValue){
        this.imageLoaded = false;
      }
    }
  }

  openModal(openModalCoctel: Coctel): void {
    if(this.modal){
      this.modal.open(openModalCoctel)
    }
  }

}
