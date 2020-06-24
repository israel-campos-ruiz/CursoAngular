//=================================native Angular==========================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
//=================================end native Angular=======================


//=================================shared===================================
import { PAGESROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';
import { BuscadorComponent } from '../components/buscador/buscador.component';
//=================================end shared================================



//=================================Pages=====================================
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficOneComponent } from './grafic-one/grafic-one.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDonaComponent } from './grafica-dona/grafica-dona.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
//=================================End Pages=================================



//=================================Pipes=====================================
import { PipesModule } from '../pipes/pipes.module';
//=================================End Pipes=================================



//=================================ng2 charts================================
import { ChartsModule } from 'ng2-charts';
import { UsuariosComponent } from './usuarios/usuarios.component';

//=================================end ng2 charts============================

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficOneComponent,
    IncrementadorComponent,
    GraficaDonaComponent,
    SettingsComponent,
    ProfileComponent,
    UsuariosComponent,
    BuscadorComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ChartsModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    PAGESROUTES
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    GraficOneComponent,
    GraficaDonaComponent,
    SharedModule
    
  ]
})
export class PagesModule { }
