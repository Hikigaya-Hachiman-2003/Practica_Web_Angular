import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DragonBallZ } from '../interfaces/dbz';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'dbz-card',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnChanges{

  @Input() public dbzcaracther : DragonBallZ | undefined

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['dbzcaracther']){
      
    }
  }
}
