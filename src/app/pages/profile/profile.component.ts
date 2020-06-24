import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Target } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  forma:FormGroup;
  usuario:Usuario;
   
  usuarioImagen:File;
  public imgTemporal:string | ArrayBuffer
  
  crearFormGroup(){
    return new FormGroup({
      nombre  : new FormControl(this.usuario.nombre),
      email   : new FormControl(this.usuario.email),
      _id     : new FormControl(this.usuario._id),

    });
  }
  constructor(private _usuarioService:UsuarioService) {
    this.usuario = this._usuarioService.Usuario;
    this.forma = this.crearFormGroup();
    
   }

  ngOnInit() {
  }


  subirImagen(archivo:File){
      if(!archivo) {
        this.usuarioImagen = null;
        return;
      }

      if(!archivo.type.includes('image')){
        Swal.fire({
          icon:'warning',
          text:'solo se aceptan imagenes'
        });
        this.usuarioImagen = null;
        return;
      }
      this.usuarioImagen = archivo;
      
      let reader = new FileReader();
      let urlImagenTemporal = reader.readAsDataURL(archivo);

      reader.onloadend = () =>{
      
          this.imgTemporal = reader.result;
      };

      console.log(this.usuarioImagen);

  }
  cambiarImagen(){
    this._usuarioService.cambiarImagenService(this.usuarioImagen, this.usuario._id);

  }

  guardar(usuario:Usuario){
    this.usuario.nombre = usuario.nombre;
    if(!this.usuario.google){
      this.usuario.email  = usuario.email;

    }
    this._usuarioService.actualizarPerfilUsuario(usuario).subscribe((res:any) =>{
         console.log(res);
          Swal.fire({
            icon:'success',
            title:`${res.usuario.nombre}`,
            text:`${res.message}`
          })
    });
  }

}
