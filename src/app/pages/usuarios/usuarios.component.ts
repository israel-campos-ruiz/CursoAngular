import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../../models/usuario.model";
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styles: [],
})
export class UsuariosComponent implements OnInit {
  cargando: boolean = true;
  desde: number = 0;
  pagina: number = 1;
  paginaFinal: number;
  totalRegistros: number = 0;
  userValue: string;
  usuarios: Usuario[] = [];

  constructor(private _usuarioService: UsuarioService) {}

  ngOnInit() {
    this.cargarUsuarios();
  
    
  
  }

  cargarUsuarios() {
    this._usuarioService.cargarUsuarios(this.desde).subscribe((res: any) => {
      this.totalRegistros = res.totalUsuarios;
      this.usuarios = res.usuarios;
      this.cargando = false;
    });
  }

  cambiarDesde(valor: number, valorPagina: number) {
    let desde = this.desde + valor;

    if (desde >= this.totalRegistros || desde < 0) return;

    this.desde += valor;
    this.pagina += valorPagina;
    let totalPagina = Math.ceil(this.totalRegistros / 5);
    this.paginaFinal = totalPagina;
    this.cargarUsuarios();
  }

  buscador(titulo: string) {

    if (titulo.length <= 0) {

    return this.cargarUsuarios();
    
    }
    this.cargando = true;
    
    this.userValue = titulo;
    this._usuarioService.buscarUsuarios(titulo).subscribe((data: any) => {
      console.log(data);
      this.usuarios = data;
      this.cargando = false;
    });
  }
  
}


