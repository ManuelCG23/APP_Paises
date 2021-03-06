import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( private RutaActiva: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {

    this.RutaActiva.params
      .pipe(
        switchMap(({id}) => this.paisService.getPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe(resp => this.pais = resp);

   /*  this.RutaActiva.params
      .subscribe(({id}) =>{
        console.log(id);

        this.paisService.getPaisPorCodigo(id)
        .subscribe(pais =>{
          console.log(pais);
        });

      });*/
  } 

}
