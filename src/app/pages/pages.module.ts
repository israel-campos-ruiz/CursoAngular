import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { PAGESROUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficOneComponent } from './grafic-one/grafic-one.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDonaComponent } from './grafica-dona/grafica-dona.component';
import { SettingsComponent } from './settings/settings.component';


//ng2 charts
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficOneComponent,
    IncrementadorComponent,
    GraficaDonaComponent,
    SettingsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ChartsModule,
    FormsModule,
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
