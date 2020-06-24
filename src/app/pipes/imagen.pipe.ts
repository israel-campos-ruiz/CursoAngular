import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string= 'usuarios'): any {
   //img es la parte de la izquierda del pipe que vendira  hacer usuario.img
    let url = `${URL_SERVICIOS}/img`;
    
    if(!img) return `${url}/usuarios/xxx`;
    
    if(img.includes('https')) return img;
    
    
    
    switch (tipo) {
      case 'usuarios':
         `${url}/usuarios/${img}`
      break;

      case 'medicos':
        `${url}/medicos/${img}`
      break;

      case 'hospitales':
        `${url}/hospitales/${img}`
       break;
    
      default:
        console.log("los tipos de usuario imagen aceptados son medicos, usuarios, hospitales");
        `${url}/usuarios/xxx`
        break;
      }
    
      return `${url}/${tipo}/${img}`;
    }
    
  }
