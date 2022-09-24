import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  api:string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getPais(pais:string){
    return this.http.get<Pais[]>(`${this.api}/name/${pais}`)
  }

  getCapital(capital:string){
    return this.http.get<Pais[]>(`${this.api}/capital/${capital}`)
  }

  getPaisPorId(id:string){
    return this.http.get<Pais>(`${this.api}/alpha/${id}`)
  }
}
