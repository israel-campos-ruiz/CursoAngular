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
     
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes))
  }

  getThemeFromLocalStorage(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
     this.applyTheme(this.ajustes.tema) 
    }else{

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