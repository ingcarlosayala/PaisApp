import { HttpErrorResponse } from '@angular/common/http';
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

    this.paisServices.getPais(this.termino = event)
       .subscribe(pais => {
        this.paises = pais;


       }, err => {
        this.hayError = true;
        this.paises = [];
       })
  }

  sugerencias(termino:string){
    this.hayError = false; 
  }

}
