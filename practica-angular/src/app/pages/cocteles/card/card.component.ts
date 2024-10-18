import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cocteles } from '../interfaces/cocteles';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'cocteles-card',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnChanges{

  @Input() public coctelesTodos: Cocteles | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    
    if(changes['coctelesTodos']){
      // console.log('coctelesTodos', this.coctelesTodos)
      // this.coctelesTodos = changes['coctelesTodos'].currentValue

    }
  }

}
