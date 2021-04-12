import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
    
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string ='';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  activaRegion(region: string){
    if(this.regionActiva!==region){
      this.regionActiva=region;
      this.paises= [];
      this.buscar();
    }else return;
   
  }

  buscar(){
    this.paisService.buscarRegion(this.regionActiva)
    .subscribe( paises =>{
      this.paises=paises;
    }, (err) => {
      this.paises=[];
    });
  }


 
}
