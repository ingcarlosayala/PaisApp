import { Component, Input, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-tabla-pais',
  templateUrl: './tabla-pais.component.html',
  styleUrls: ['./tabla-pais.component.css']
})
export class TablaPaisComponent implements OnInit {

  @Input() paises:Pais[] = [];
  @Input() hayError!:boolean;
  @Input() termino:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
