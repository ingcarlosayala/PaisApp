import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PaisRoutingModule } from './pais-routing.module';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PaisPagesComponent } from './pages/pais-pages/pais-pages.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
    PorRegionComponent,
       PorCapitalComponent,
       PorPaisComponent,
       PaisPagesComponent
  ],
  imports: [
    CommonModule,
    PaisRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PaisModule { }
