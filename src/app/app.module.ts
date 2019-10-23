import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

//RUTAS//
import { AppRoutingModule } from './app-routing.module';

//MODULOS//
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';


import { PagesComponent } from './pages/pages.component';

//LOGIN// 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    SharedModule,
    AppRoutingModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
