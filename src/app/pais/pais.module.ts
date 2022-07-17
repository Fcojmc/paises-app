import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { DetallePaisComponent } from './pages/detalle-pais/detalle-pais.component';
import { RouterModule } from '@angular/router';
import { PaisesListComponent } from './components/paises-list/paises-list.component';
import { PaisesInputComponent } from './components/paises-input/paises-input.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    DetallePaisComponent,
    PaisesListComponent,
    PaisesInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    DetallePaisComponent
  ]
})
export class PaisModule { }
