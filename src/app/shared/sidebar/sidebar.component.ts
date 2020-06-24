import { Component, OnInit } from '@angular/core';

import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../../models/usuario.model';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ['.cursor { cursor:pointer; }']
})
export class SidebarComponent implements OnInit {

  usuario:Usuario;
  constructor(public sideBarService:SidebarService, private _usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuario = this._usuarioService.Usuario;
  }


  logOut(){
    this._usuarioService.logOut();
  }

}
