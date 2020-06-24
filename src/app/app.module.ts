import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

//RUTAS//
import { AppRoutingModule } from './app-routing.module';

//MODULOS//
import { PagesModule } from './pages/pages.module';



import { PagesComponent } from './pages/pages.component';

//LOGIN// 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


//Temporales
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    RegisterComponent,

    
  ],
  imports: [
    BrowserModule,
    PagesModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
