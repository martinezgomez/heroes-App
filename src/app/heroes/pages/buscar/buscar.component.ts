import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroes[] = [];
  heroeSeleccionado!: Heroes| undefined;

  constructor( private heroeServices: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    return this.heroeServices.getSugerencias(this.termino.trim()).subscribe( res => this.heroes = res );
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ){

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroes = event.option.value;
    this.termino = heroe.superhero;

    this.heroeServices.getHeroePorId( heroe.id! ).subscribe(

      res => this.heroeSeleccionado = res
    )
  }

}
