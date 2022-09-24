import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisPagesComponent } from './pages/pais-pages/pais-pages.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';

const routes: Routes = [
  {
    path: '',
    component: PaisPagesComponent,
    children:[
      {path: 'pais',component: PorPaisComponent},
      {path: 'capital',component: PorCapitalComponent},
      {path: 'region',component: PorRegionComponent},
      {path: '**',redirectTo: 'pais'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisRoutingModule { }
