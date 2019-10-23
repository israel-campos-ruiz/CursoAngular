import { PAGESROUTES } from './pages.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficOneComponent } from './grafic-one/grafic-one.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficOneComponent
  ],
  imports: [
    CommonModule,
    PAGESROUTES
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    GraficOneComponent,
    
  ]
})
export class PagesModule { }
