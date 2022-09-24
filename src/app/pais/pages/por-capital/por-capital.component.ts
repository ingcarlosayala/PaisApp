import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  paises:Pais[] = [];
  termino:string = '';
  hayError:boolean = false;

  constructor(private paisServices:PaisService) { }

  ngOnInit(): void {
    
  }

  buscar(event:string){

    if (event != this.termino) {
      setTimeout(() => {
        this.hayError = false;
      }, 4000);
    }

    this.paisServices.getCapital(this.termino = event)
       .subscribe(capital => {
        this.paises = capital;


       }, err => {
        this.hayError = true;
        this.paises = [];
       })
  }

  sugerencias(termino:string){
    this.hayError = false;
  }

}
