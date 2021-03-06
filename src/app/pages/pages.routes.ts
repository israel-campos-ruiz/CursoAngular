import { RouterModule, Routes, CanActivate } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficOneComponent } from './grafic-one/grafic-one.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginGuard } from '../services/guards/login.guard';
import { ProfileComponent } from './profile/profile.component';


//============================MantenimientosSideBar===============================
import { UsuariosComponent } from './usuarios/usuarios.component';

//============================End MantenimientosSideBar===========================

const pagesRoutes: Routes = [
      { path: '', component: PagesComponent, 
      canActivate:[LoginGuard],
      children:[
        { path: 'dashboard', component: DashboardComponent },
        { path: 'account-settings', component: SettingsComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'graficas1', component: GraficOneComponent },
        { path: 'perfil', component: ProfileComponent },
  //============================MantenimientosSideBar==============================
        { path: 'usuarios', component: UsuariosComponent },
   //===========================End MantenimientosSideBar==========================      
        { path: '', redirectTo : '/dashboard', pathMatch: 'full' },

      ]
    
   },
];

export const PAGESROUTES = RouterModule.forChild(pagesRoutes);