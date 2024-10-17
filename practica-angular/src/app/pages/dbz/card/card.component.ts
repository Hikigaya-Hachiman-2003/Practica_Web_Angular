import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { DragonBallZ, Item } from '../interfaces/dbz';
import { NgFor, NgIf } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'dbz-card',
  standalone: true,
  imports: [NgIf, NgFor, ModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnChanges{

  @Input() public dbzcaracther : DragonBallZ | undefined

  @ViewChild(ModalComponent) public modal!: ModalComponent

  imageLoaded: boolean = false;

  selectedCaractherDbz!: Item

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dbzcaracther']){
      this.imageLoaded = false;
    }
  }

  openModal(caractherDbz: Item):void{
    if(this.modal){
      this.modal.open(caractherDbz)
    }
  }
}
