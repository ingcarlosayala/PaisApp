import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!:Pais;

  constructor(private paisService:PaisService,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //Con switchMap
   this.activeRoute.params
   .pipe(
    switchMap( ({id})  => this.paisService.getPaisPorId(id))
   )
   .subscribe((pais) => {
    console.log(pais);
    setTimeout(() => {
      this.pais = pais;
    }, 500);
   })

  // this.activeRoute.params
  //     .subscribe(({id}) => {
  //       console.log(id);

  //       this.paisService.getPaisPorId(id)
  //       .subscribe(pais => {
  //         console.log(pais);
  //       })
  //     })

  }
}
