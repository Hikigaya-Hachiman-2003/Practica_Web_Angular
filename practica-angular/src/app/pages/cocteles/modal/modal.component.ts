import { isPlatformBrowser, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Coctel } from '../interfaces/cocteles';

@Component({
  selector: 'coctel-modal',
  standalone: true,
  imports: [NgFor, TitleCasePipe, NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() public coctel: Coctel = {
    idDrink: '',
    strDrink: '',
    strDrinkAlternate: '',
    strTags: '',
    strCategory: '',
    strIBA: '',
    strAlcoholic: '',
    strGlass: '',
    strInstructions: '',
    strInstructionsES: '',
    strInstructionsDE: '',
    strInstructionsFR: '',
    strInstructionsIT: '',
    strDrinkThumb: '',
    strIngredient1: '',
    strIngredient2: '',
    strIngredient3: '',
    strIngredient4: '',
    strIngredient5: '',
    strIngredient6: '',
    strIngredient7: '',
    strIngredient8: '',
    strIngredient9: '',
    strIngredient10: '',
    strIngredient11: '',
    strIngredient12: '',
    strIngredient13: '',
    strIngredient14: '',
    strIngredient15: '',
    strMeasure1: '',
    strMeasure2: '',
    strMeasure3: '',
    strMeasure4: '',
    strMeasure5: '',
    strMeasure6: '',
    strMeasure7: '',
    strMeasure8: '',
    strMeasure9: '',
    strMeasure10: '',
    strMeasure11: '',
    strMeasure12: '',
    strMeasure13: '',
    strMeasure14: '',
    strMeasure15: '',
    strCreativeCommonsConfirmed: '',
    dateModified: '',
  } as Coctel

  private bootstrapModalCoctel: any;

  @ViewChild('coctelModal') public coctelModalElement!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.inicializeModal();
    }
  }

  inicializeModal(): void {
    import('bootstrap').then((bootstrap) => {
      this.bootstrapModalCoctel = new bootstrap.Modal(
        this.coctelModalElement.nativeElement
      );
    });
  }

  open(coctelmod: Coctel) {
    this.coctel = coctelmod;
    if (isPlatformBrowser(this.platformId)) {
      if (this.bootstrapModalCoctel) {
        this.bootstrapModalCoctel.show();
      }
    } else {
      this.inicializeModal();
      setTimeout(() => {
        this.bootstrapModalCoctel.show();
      }, 0);
    }
  }

  close(): void {
    this.bootstrapModalCoctel.hide();
  }
}
