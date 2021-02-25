import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px;
    }
  `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroes;

  constructor( 
              private ActivatedRouteRoute: ActivatedRoute, 
              private heroeService: HeroesService,
              private router: Router ) { }

  ngOnInit(): void {
    this.ActivatedRouteRoute.params.subscribe( ({ id }) =>  {
      this.heroeService.getHeroePorId( id ).subscribe( ref => this.heroe = ref)
      
    })

  }

  regresar(){
    this.router.navigate(['/heroes/listado'])
  }

}
