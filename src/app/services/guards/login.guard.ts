import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(public _usuarioService:UsuarioService, private router:Router){}

  canActivate():boolean{
    if(this._usuarioService.estaLogueado()){
      return true;
    }else{
      console.log('bloqueado por el guard');
      this.router.navigate(['/login']);
      return false 
    }
    
  }
  
}
