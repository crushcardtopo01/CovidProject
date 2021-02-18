import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { InformacionComponent } from './informacion/informacion.component';
import { VacunacionComponent } from './vacunacion/vacunacion.component';
import { VisitarMedicoComponent } from './visitar-medico/visitar-medico.component';
import { MitosComponent } from './mitos/mitos.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { AcordionComponent } from './acordion/acordion.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalComponent,
    RecomendacionesComponent,
    InformacionComponent,
    VacunacionComponent,
    VisitarMedicoComponent,
    MitosComponent,
    CarruselComponent,
    AcordionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
