import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  paises:Pais[] = [];
  termino:string = '';

  constructor(private paisServices:PaisService) { }

  ngOnInit(): void {
    
  }

  buscar(event:string){
    this.paisServices.getPais(this.termino = event)
       .subscribe((pais) => {
        console.log(pais);
        this.paises = pais;
       })
  }

}
