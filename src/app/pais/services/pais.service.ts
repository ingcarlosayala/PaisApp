import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  api:string = environment.baseUrl;

  params = new HttpParams()
  .set('fields','name,capital,alpha3Code,flags,population,callingCodes,region,translations')

  constructor(private http:HttpClient) { }

  getPais(pais:string){
    return this.http.get<Pais[]>(`${this.api}/name/${pais}`,{params:this.params})
  }

  getCapital(capital:string){
    return this.http.get<Pais[]>(`${this.api}/capital/${capital}`,{params:this.params})
  }

  getPaisPorId(id:string){
    return this.http.get<Pais>(`${this.api}/alpha/${id}`,{params:this.params})
  }

  getPaisRegion(region:string){
    

    return this.http.get<Pais[]>(`${this.api}/regionalbloc/${region}`,{params:this.params})
      .pipe(
        tap(resp => {
          console.log(resp);
        })
      )
  }
}
