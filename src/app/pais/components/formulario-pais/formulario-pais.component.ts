import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-pais',
  templateUrl: './formulario-pais.component.html',
  styleUrls: ['./formulario-pais.component.css']
})
export class FormularioPaisComponent implements OnInit {

  @Input() termino:string = '';
  @Output() OnEnter:EventEmitter<string> = new EventEmitter<string>;

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){
    this.OnEnter.emit(this.termino);
  }

}
