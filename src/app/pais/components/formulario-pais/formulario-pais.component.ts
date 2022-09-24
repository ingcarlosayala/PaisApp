import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-formulario-pais',
  templateUrl: './formulario-pais.component.html',
  styleUrls: ['./formulario-pais.component.css']
})
export class FormularioPaisComponent implements OnInit {

  @Input() termino:string = '';
  @Input() placeholder:string = '';
  @Output() OnEnter:EventEmitter<string> = new EventEmitter<string>;
  @Output() OnDebounce: EventEmitter<string> = new EventEmitter();

  debouncer:Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debouncer
        .pipe(debounceTime(300))
        .subscribe(valor => {
          this.OnDebounce.emit(valor);
        })
  }

  buscar(){

    if (this.termino.length > 0) {
      this.OnEnter.emit(this.termino);
    }
    this.termino = '';
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }

}
