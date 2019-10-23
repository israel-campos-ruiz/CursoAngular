import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficOneComponent } from './grafic-one/grafic-one.component';

const pagesRoutes: Routes = [
      { path: '', component: PagesComponent, 
     children:[
        { path: 'dashboard', component: DashboardComponent },
       { path: 'progress', component: ProgressComponent },
         { path: 'graficas1', component: GraficOneComponent },
        { path: '', redirectTo : '/dashboard', pathMatch: 'full' },

      ]
    
   },
];

export const PAGESROUTES = RouterModule.forChild(pagesRoutes);