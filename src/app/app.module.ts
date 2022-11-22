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
import { CatalogoModule } from './catalogo/catalogo.module';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { AgendarCitaModule } from './agendar-cita/agendar-cita.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MisCitasComponent } from './catalogo/mis-citas/mis-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
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
    },
    {
      provide: MatPaginatorIntl, 
      useClass: MisCitasComponent
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
