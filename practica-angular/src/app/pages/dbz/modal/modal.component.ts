import { isPlatformBrowser, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { Item } from '../interfaces/dbz';

@Component({
  selector: 'dbz-modal',
  standalone: true,
  imports: [NgFor, NgIf, TitleCasePipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  
  @Input() public dbz: Item = {
    id: 0,
    image: '',
    name: '',
    ki: '',
    maxKi: '',
    race: '',
    gender: {
      
    },
    description: '',
    affiliation: {

    },
    originPlanet:{
      name: '',
      isDestroyed: false,
      description: '',
      image: '',
      deletedAt:   null
    },
    transformations: [
      {
        name: '',
        image: '',
        ki: '',
        deletedAt: null
      }],
      deletedAt:   null

  } as Item

  private bootstrapModal: any;

  @ViewChild('modalElement') public modalElement!: ElementRef

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.inicializeModal()
    }
  }

  inicializeModal(): void {
    import('bootstrap').then((bootstrap)=>{
      this.bootstrapModal = new bootstrap.Modal(this.modalElement.nativeElement)
    })
  }

  open(dbzcara: Item):void{
    this.dbz = dbzcara
    if(isPlatformBrowser(this.platformId)){
      if(this.bootstrapModal){
        this.bootstrapModal.show()
      }
    }else{
      this.inicializeModal()
      setTimeout(() => {
        this.bootstrapModal.show()
      }, 0);
    }
  }

  close():void{
      this.bootstrapModal.hide()
  }
}
