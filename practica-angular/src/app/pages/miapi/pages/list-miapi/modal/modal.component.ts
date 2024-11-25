import { isPlatformBrowser, NgFor } from '@angular/common';
import { Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { Ejemplo } from '../interfaces/gfnc';


@Component({
  selector: 'gfnc-modal',
  standalone: true,
  imports: [NgFor],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() public gfnc: Ejemplo = {
    _id: '',
    Imagen: '',
    Nombre: '',
    Clase: '',
    Rareza: '',
    Stats_max: [
      {
        HP: '',
        ATK: '',
        ATK_Speed: '',
        Power: '',
        DEF: '',
        DEF_Penetration: '',
        Crit_Rate: '',
        Crit_Damage: '',
        After_Battle_Recovery: '',
        _id: ''
      }
    ],
    Stats_min: [
      {
        HP: '',
        ATK: '',
        ATK_Speed: '',
        Power: '',
        DEF: '',
        DEF_Penetration: '',
        Crit_Rate: '',
        Crit_Damage: '',
        After_Battle_Recovery: '',
        _id: ''
      }
    ],
    Skills: [
      {
        Nombre: '',
        Descripcion: '',
        _id: ''
      }
    ],
    __v: 0
  } as unknown as Ejemplo


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

  open(gfnccara: Ejemplo): void {
    this.gfnc = gfnccara; // Asignamos los datos obtenidos al modal
    if (isPlatformBrowser(this.platformId)) {
      if (this.bootstrapModal) {
        this.bootstrapModal.show();
      }
    } else {
      this.inicializeModal();
      setTimeout(() => {
        this.bootstrapModal.show();
      }, 0);
    }
  }
  

  close():void{
      this.bootstrapModal.hide()
  }
  
}

