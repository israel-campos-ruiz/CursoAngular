import { PAGESROUTES } from './pages.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficOneComponent } from './grafic-one/grafic-one.component';
import {FormsModule} from '@angular/forms'
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficOneComponent,
    IncrementadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PAGESROUTES
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    GraficOneComponent,
    
  ]
})
export class PagesModule { }
