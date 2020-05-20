//IMPORTAR LOS MODULOS DEL ROUTER DE ANGULAR

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//IMPORTAR COMPONENTES
import { HomeComponent } from './components/home/home.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { SeriesComponent } from './components/series/series.component';
import { FormularioSeriesComponent } from './components/formulario-series/formulario-series.component';
import { FormularioPersonajesComponent } from './components/formulario-personajes/formulario-personajes.component';
import { VerPersonajeComponent } from './components/ver-personaje/ver-personaje.component';
import { VerSerieComponent } from './components/ver-serie/ver-serie.component';
import { ErrorComponent } from './components/error/error.component';
import { PersonajeEditComponent } from './components/personaje-edit/personaje-edit.component';


//ARRAY DE RUTAS
const appRoutes: Routes = [   
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'personajes', component: PersonajesComponent},
    {path: 'series', component: SeriesComponent},
    {path: 'series/ver-serie', component: VerSerieComponent},
    {path: 'series/formulario-series', component: FormularioSeriesComponent},
    {path: 'personajes/formulario-personajes', component: FormularioPersonajesComponent},
    {path: 'personajes/ver-personaje/:id', component: VerPersonajeComponent},
    {path: 'personajes/editar/:id', component: PersonajeEditComponent},
    {path: '**', component: ErrorComponent}
];

//EXPORTAR EL MODULO DE RUTAS
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);