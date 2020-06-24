import { Injectable } from "@angular/core";
import { resolve } from "url";
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: "root",
})
export class SubirImagenService {
  constructor() {}

  subirArchivo(archivo: File, tipo: string, _id: string) {
    
    //============promesa para comunicar el estado del formulario en otro lado ================================
    return new Promise((resolve, reject) => {
      //============CREAMOS LAS VARIABLES PARA CONTROLAR EL FORMULARIO CON VANILLAJS===========================
      let formData = new FormData();
      let xhr = new XMLHttpRequest();
  //============FINAL CREAMOS LAS VARIABLES PARA CONTROLAR EL FORMULARIO CON VANILLAJS=======================

      formData.append("imagen", archivo, archivo.name);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 ) {

          if(xhr.status === 200){
           
            resolve(JSON.parse(xhr.response));

          }else{
           
            reject(JSON.parse(xhr.response));
          }


        }
      };
      let url = `${URL_SERVICIOS}/upload/${tipo}/${_id}`;

      xhr.open('PUT',url,true);
      xhr.send(formData);

    });
    //============FINAL promesa para comunicar el estado del formulario en otro lado ===============================
    
  }

}
