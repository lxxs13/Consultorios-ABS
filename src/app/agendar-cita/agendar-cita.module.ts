import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendarCitaComponent } from './agendar-cita.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AgendarCitaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AgendarCitaComponent
  ]
})
export class AgendarCitaModule { }
