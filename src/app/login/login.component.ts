import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

declare function init_plugins();
declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


//===============================Propiedades de la clase=========================================
private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
forma:FormGroup;
email:string = localStorage.getItem('email') || '';
recuerdame:boolean = true;
auth2:any;
//===============================End propiedades de la clase========================================



  createFormGroup(){
    return new FormGroup({
      email      : new FormControl(this.email, Validators.pattern(this.emailPattern)),
      password   : new FormControl(''),
      recuerdame : new FormControl(this.recuerdame)

    });
  }
  constructor(public router:Router, private _usuarioService:UsuarioService) { 
    this.forma = this.createFormGroup();
  }

  ngOnInit() {
    init_plugins();
    this.email;
    this.googleInit();
    
  }
//====================================INGRESO POR GOOGLE============================
  googleInit(){
    gapi.load('auth2', ()=>{
        this.auth2 = gapi.auth2.init({
          client_id:'382775380302-96ht1pr2rpd2n41udtng57hfn8j1katr.apps.googleusercontent.com',
          cookiepolicy:'single_host_origin',
          scope:'profile email'
        });

        //llamamos el attahcSignIn y le vamos a pasar el id del boton de google 

        this.attachSignIn(document.getElementById('btnGoogle'));
    });
  }


  attachSignIn(element){
    this.auth2.attachClickHandler(element,{}, (googleUser)=>{
        // let profile = googleUser.getBasicProfile();
        var token = googleUser.getAuthResponse().id_token;
        this._usuarioService.loginGoogle(token).subscribe((res:any)=>{
            console.log(res);
            //El ciclo de deteccion de Angular tiene un bug entonces debemos de hacer una redireccion manual
            window.location.href = '/dashboard';
        });
    });
  }
// ===================================FINAL INGRESO POR GOOGLE======================
  ingresar(forma:FormGroup){
    
    let usuario = new Usuario(null, forma.value.email,forma.value.password)
  
    this._usuarioService.login(usuario, forma.value.recuerdame).subscribe((res:any) =>{
      console.log(res);
       window.location.href = '/dashboard';
    });
  
  }

}
