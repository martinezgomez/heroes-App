import { Component, Input } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `
    mat-card{
      margin-top:20px;
    }
    `
  ]
})
export class HeroeTarjetaComponent{

  @Input() heroe!: Heroes;

}
