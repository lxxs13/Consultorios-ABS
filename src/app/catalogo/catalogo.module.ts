import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { MisCitasComponent } from './mis-citas/mis-citas.component';
import { MisPacientesComponent } from './mis-pacientes/mis-pacientes.component';
import { CatalogosEspecialistasComponent } from './catalogos-especialistas/catalogos-especialistas.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ConfiguracionComponent,
    MisCitasComponent,
    MisPacientesComponent,
    CatalogosEspecialistasComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ConfiguracionComponent,
    MisCitasComponent,
    MisPacientesComponent,
    CatalogosEspecialistasComponent,
  ]
})
export class CatalogoModule { }
