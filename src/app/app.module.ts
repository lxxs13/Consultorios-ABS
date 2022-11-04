import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CatalogoModule } from './catalogo/catalogo.module';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ConfiguracionComponent } from './catalogo/configuracion/configuracion.component';
import { MisCitasComponent } from './catalogo/mis-citas/mis-citas.component';
import { MisPacientesComponent } from './catalogo/mis-pacientes/mis-pacientes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AgendarCitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CatalogoModule
  ],
  exports: [
  ],
  providers: [
    { 
      // cambia el lenguaje de los componentes del datePicker a español
      provide: MAT_DATE_LOCALE, 
      useValue: 'es-MX' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
