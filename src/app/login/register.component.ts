//================================ NATIVE ANGULAR==============================
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//===============================  END NATIVE ANGULAR===========================


//================================ FUNCTION TO PLUGINS==========================
declare function init_plugins(); 
import swal from 'sweetalert2';
//================================ END FUNCTION TO PLUGINS======================


//================================ SERVICE & MODELS==============================
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
//================================ END SERVICE & MODELS==========================




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})


export class RegisterComponent implements OnInit {
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  forma:FormGroup;

  constructor( private _usuarioService:UsuarioService, private router:Router) {
    this.forma = this.createFormGroup();
  }
  sonIguales( campo1:string, campo2:string){

     return (group:FormGroup) =>{
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

       if(pass1 === pass2) return null;
       
       return {sonIguales : true}
     
    }  
  }
  
    ngOnInit() {
      init_plugins()
    }

   createFormGroup(){
    return new FormGroup({
      nombre       : new FormControl('', [Validators.required]),
      email        : new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password     : new FormControl('', [ Validators.required,]),
      password2    : new FormControl('', [Validators.required]),
      condiciones  : new FormControl(false),
    }, {validators:this.sonIguales('password', 'password2') });
  }


  

  registrarse(){
    
    if(!this.forma.value.condiciones){
       swal.fire({
         icon: 'error',
         title:'¡Opss!',
         text: 'Debes de aceptar las condiciones de uso 😉'
       });
      }
    
    //Con base en el modelo de usuario vamos a instanciar un nuevo usuario y lo mandaremos aquí
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password,
    );

     this._usuarioService.createUser(usuario).subscribe(res =>{
        console.log(res);
        this.router.navigate(['/login'])
     });
  }

}
