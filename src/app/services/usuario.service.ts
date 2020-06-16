import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../config/config';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 urlUsuario = `${URL_SERVICIOS}/usuario`;
 urlLogin   = `${URL_SERVICIOS}/login`;
 token:string;
 Usuario:string;
  constructor( private http:HttpClient) { 
    this.cargarStorage();
  }

  cargarStorage(){
   if(localStorage.getItem('token')){
     this.token = localStorage.getItem('token');
     this.Usuario = JSON.parse(localStorage.getItem('usuario'));
   }else{
     this.token = '';
     this.Usuario = null;
   }

  }

 estaLogueado() {
  return (this.token.length > 5) ? true : false;
 }


  createUser(user:Usuario) {
    return this.http.post(this.urlUsuario,user).pipe(
        map((res:any) => {
          Swal.fire({
            icon:'success',
            title:`Hola ${res.usuario.nombre} bienvenid@ 😍`
          });
            return res.usuario
        })
    );
  }

  login(user:Usuario, recuerdame:boolean = false) {
     recuerdame === true ? localStorage.setItem('email',user.email) : localStorage.removeItem('email');


      return this.http.post(this.urlLogin, user).pipe(
        map((res:any)=>{
           localStorage.setItem('id', res.id);
           localStorage.setItem('token', res.token);
           localStorage.setItem('usuario', JSON.stringify(res.usuario));
           return true;
        })
      )  
  }

  loginGoogle( token:string ){
    let urlGoogle = `${URL_SERVICIOS}/login/google`
      return this.http.post(urlGoogle, {token} ).pipe(
        map((res:any)=>{
          localStorage.setItem('id', res.id);
          localStorage.setItem('token', res.token);
          localStorage.setItem('usuario', JSON.stringify(res.usuario));
          return res;
        })
      )
  }
  
}
