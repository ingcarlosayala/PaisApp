import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones:string[] = ['eu' ,'efta' ,'caricom' ,'pa' ,'au' ,'usan' ,'eeu' ,'al', 'asean' ,'cais' ,'cefta' ,'nafta' ,'saarc']
  regionActiva:string = '';
  paises:Pais[] = [];

  constructor(private paisServices:PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region:string){

    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisServices.getPaisRegion(region)
       .subscribe(pais => {
        this.paises = pais;
       })
  }

}
