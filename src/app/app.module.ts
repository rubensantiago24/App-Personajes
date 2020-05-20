import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders }from './app.routing';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from "angular-file-uploader";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { SeriesComponent } from './components/series/series.component';
import { ErrorComponent } from './components/error/error.component';
import { FormularioSeriesComponent } from './components/formulario-series/formulario-series.component';
import { FormularioPersonajesComponent } from './components/formulario-personajes/formulario-personajes.component';
import { VerPersonajeComponent } from './components/ver-personaje/ver-personaje.component';
import { VerSerieComponent } from './components/ver-serie/ver-serie.component';
import { from } from 'rxjs';
import { PersonajeEditComponent } from './components/personaje-edit/personaje-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    PersonajesComponent,
    SeriesComponent,
    ErrorComponent,
    FormularioSeriesComponent,
    FormularioPersonajesComponent,
    VerPersonajeComponent,
    VerSerieComponent,
    PersonajeEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
