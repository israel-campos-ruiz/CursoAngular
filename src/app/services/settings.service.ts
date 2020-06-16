import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})


export class SettingsService {

  constructor(@Inject(DOCUMENT) private _document) {
    this.getThemeFromLocalStorage()
   }

  ajustes:Ajustes ={
    temaUrl:"assets/css/colors/default.css",
    tema:"default"
  }

  saveThemeInLocalStorage(){
    console.log("guardando en el localStorage");    
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes))
  }

  getThemeFromLocalStorage(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log("cargando del storage");
     this.applyTheme(this.ajustes.tema)
      
    }else{
      console.log("usando valores por defecto");
      
    }
  }

  applyTheme(theme:string){
    let url = `assets/css/colors/${theme}.css`
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.temaUrl = url
    this.ajustes.tema = theme

    this.saveThemeInLocalStorage()
  }
}

interface Ajustes{
  temaUrl:string,
  tema:string
}