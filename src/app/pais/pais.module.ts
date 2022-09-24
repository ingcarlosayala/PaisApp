import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PaisRoutingModule } from './pais-routing.module';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PaisPagesComponent } from './pages/pais-pages/pais-pages.component';
import { FormsModule } from '@angular/forms';
import { TablaPaisComponent } from './components/tabla-pais/tabla-pais.component';
import { FormularioPaisComponent } from './components/formulario-pais/formulario-pais.component';
import { SharedModule } from '../shared/shared.module';
import { ImagenPipe } from './pipes/imagen.pipe';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';

@NgModule({
  declarations: [
  
    PorRegionComponent,
       PorCapitalComponent,
       PorPaisComponent,
       PaisPagesComponent,
       TablaPaisComponent,
       FormularioPaisComponent,
       ImagenPipe,
       VerPaisComponent
  ],
  imports: [
    CommonModule,
    PaisRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ]
})
export class PaisModule { }
