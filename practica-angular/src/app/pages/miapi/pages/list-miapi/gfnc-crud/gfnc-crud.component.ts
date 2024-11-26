import { Component } from '@angular/core';
import { GfncService } from '../services/gfnc.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gfnc-crud',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './gfnc-crud.component.html',
  styleUrl: './gfnc-crud.component.css'
})
export class GfncCrudComponent {

  gfnc = {
    ejemplo: {
      _id: '', // Puede estar vacío si no lo tienes
      Imagen: '',
      Nombre: '',
      Clase: '',
      Rareza: '',
      Stats_max: {
        HP: '',
        ATK: '',
        ATK_Speed: '',
        Power: '',
        DEF: '',
        DEF_Penetration: '',
        Crit_Rate: '',
        Crit_Damage: '',
        After_Battle_Recovery: ''
      },
      Stats_min: {
        HP: '',
        ATK: '',
        ATK_Speed: '',
        Power: '',
        DEF: '',
        DEF_Penetration: '',
        Crit_Rate: '',
        Crit_Damage: '',
        After_Battle_Recovery: ''
      },
      Skills: [{
        _id: '', // Puede estar vacío si no lo tienes
        Nombre: '',
        Descripcion: ''
      }],
      __v: 0 // O dejar vacío si no lo tienes
    }
  };

  constructor(private gfncService: GfncService, private router: Router) {}

  
  addSkill(): void {
    this.gfnc.ejemplo.Skills.push({_id:'' ,Nombre: '', Descripcion: '' });
  }
  

  onSubmit(): void {
    // Crear un nuevo objeto limpio con la estructura correcta
    const cleanedData = {
      Imagen: this.gfnc.ejemplo.Imagen,
      Nombre: this.gfnc.ejemplo.Nombre,
      Clase: this.gfnc.ejemplo.Clase,
      Rareza: this.gfnc.ejemplo.Rareza,
      Stats_max: {
        HP: this.gfnc.ejemplo.Stats_max.HP,
        ATK: this.gfnc.ejemplo.Stats_max.ATK,
        ATK_Speed: this.gfnc.ejemplo.Stats_max.ATK_Speed,
        Power: this.gfnc.ejemplo.Stats_max.Power,
        DEF: this.gfnc.ejemplo.Stats_max.DEF,
        DEF_Penetration: this.gfnc.ejemplo.Stats_max.DEF_Penetration,
        Crit_Rate: this.gfnc.ejemplo.Stats_max.Crit_Rate,
        Crit_Damage: this.gfnc.ejemplo.Stats_max.Crit_Damage,
        After_Battle_Recovery: this.gfnc.ejemplo.Stats_max.After_Battle_Recovery
      },
      Stats_min: {
        HP: this.gfnc.ejemplo.Stats_min.HP,
        ATK: this.gfnc.ejemplo.Stats_min.ATK,
        ATK_Speed: this.gfnc.ejemplo.Stats_min.ATK_Speed,
        Power: this.gfnc.ejemplo.Stats_min.Power,
        DEF: this.gfnc.ejemplo.Stats_min.DEF,
        DEF_Penetration: this.gfnc.ejemplo.Stats_min.DEF_Penetration,
        Crit_Rate: this.gfnc.ejemplo.Stats_min.Crit_Rate,
        Crit_Damage: this.gfnc.ejemplo.Stats_min.Crit_Damage,
        After_Battle_Recovery: this.gfnc.ejemplo.Stats_min.After_Battle_Recovery
      },
      Skills: this.gfnc.ejemplo.Skills.map(({ _id, ...skill }) => skill) // Eliminar _id de cada habilidad
    };
  
    // Verifica que los datos que se enviarán son correctos
    console.log('Datos que se enviarán:', cleanedData);
  
    // Enviar los datos limpios al backend
    this.gfncService.createGFNC(cleanedData).subscribe({
      next: (response) => {
        console.log('GFNC creado correctamente:', response);
        alert('GFNC creado correctamente');
        this.router.navigate(['/miapi/list']);
      },
      error: (err) => {
        console.error('Error al crear GFNC:', err);
        alert('Error al crear GFNC');
      }
    });
  }
  

}