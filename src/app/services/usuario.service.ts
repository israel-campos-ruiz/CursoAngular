
//====================================NATIVO ANGULAR==============================================================
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
//=================================fINAL NATIVO ANGULAR==============================================================



//=================================RXJS=============================================================================
import { map } from 'rxjs/operators';
//=================================RXJS=============================================================================


//=============================MODELO Y VARIABLE GLOBAL PARA LOS SERVICIOS=============================================================================
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../config/config';
//=============================FINAL MODELO Y VARIABLE GLOBAL PARA LOS SERVICIOS=============================================================================


//=================================OTROS=============================================================================
import { SubirImagenService } from './subir-imagen.service';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';


//================================FINAL OTROS=============================================================================


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
//==================Rutas del backend========================================================================
 urlUsuario = `${URL_SERVICIOS}/usuario`;
 urlLogin   = `${URL_SERVICIOS}/login`;
//==================End Rutas del backend====================================================================

//================== Propiedades para poder obtener el token y el usuario del localStorage======================
  token:string;
  Usuario:Usuario;
//================== Propiedades para poder obtener el token y el usuario del localStorage======================
 
 constructor( private http:HttpClient, private router:Router, public _subirImagenService:SubirImagenService) { 
    this.cargarStorage();
  }
//=====================Cargamos el token para que siempre exista un valor=====================================
  cargarStorage(){
   if(localStorage.getItem('token')){
     this.token = localStorage.getItem('token');
     this.Usuario = JSON.parse(localStorage.getItem('usuario'));
   }else{
     this.token = ' ';
     this.Usuario = null;
   }
  }
//===================Final Cargamos el token para que siempre exista un valor=================================


//==================Este servicio va para el LoginGuard sirve para saber si pasa el guard ====================
 estaLogueado() {
  return (this.token.length > 5) ? true : false;
 }
//==================Final servicio va para el LoginGuard sirve para saber si  pasa el guard ===================


//=============================================Crear un usuario==================================================
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
  //==================Final crear usuario========================================================================


//==================Login tradicional que se usa en el login.component.ts========================================================================

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

//==================Login tradicional que se usa en el login.component.ts========================================================================


//==================Login google=================================================================================================================
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
//==================Login google=================================================================================================================


//=======================LOG OUT usuario============================================================================================================
  
  logOut(){
    this.token = '';
    this.Usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

//==================Final LOGOUT usuario===========================================================================================================



//=============================Actualizar usuario=================================================================
    
   actualizarPerfilUsuario(usuario:Usuario){
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
      let url = `${URL_SERVICIOS}/usuario/${usuario._id}?token=${this.token}`
      console.log(url);
      return this.http.put(url,usuario,{headers}).pipe(
        map( res =>{
          localStorage.setItem('id', this.Usuario._id);
          localStorage.setItem('token', this.token);
          localStorage.setItem('usuario', JSON.stringify(this.Usuario));
          return res;
        })
      );
  }
//=============================Final actualizar usuario==============================================================


//=============================Cambiar imagen=========================================================================
 async cambiarImagenService(archivo:File, _id:string){
      let respuesta:any = await this._subirImagenService.subirArchivo(archivo,'usuarios', _id)
       try {
         console.log(respuesta);
         this.Usuario.img = respuesta.usuario.img
         swal.fire({
          icon:'success',
          title:`Hola ${respuesta.usuario.nombre}`,
          text:`actualizaste tu imagen correctamente 😁`
         });
       } catch (error) {
          console.log(error);
       }  
  }
  

//=============================Final Cambiar imagen==============================================================



//=============================Cargar usuarios==================================================================

  cargarUsuarios(desde:number = 0) {
    return this.http.get(`${this.urlUsuario}?desde=${desde}`);
  }
  
//=============================FinalCargar usuarios=============================================================


//=============================Busqueda de usuarios=============================================================
  buscarUsuarios(termino:string){
    return this.http.get(`${URL_SERVICIOS}/busqueda/coleccion/usuarios/${termino}`).pipe(
      map((usuarios:any) =>{
        return usuarios = usuarios.usuarios
      })
    )
  }

//=============================Final busqueda de usuarios=============================================================



}

