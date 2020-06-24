import { Pipe, PipeTransform } from "@angular/core";
import { Usuario } from '../../models/usuario.model';

@Pipe({
  name: "buscador",
})
export class BuscadorPipe implements PipeTransform {
  // lo de la izquierda es el ngfor y lo de la izquierda es el valor de los parametros del pipe
  transform(listaUsuarios: Usuario[], texto: string): any {
    if (!texto) return listaUsuarios;
    console.log(texto);
    
  

  

    return listaUsuarios.filter(user => user.nombre.toLowerCase().includes(texto.toLowerCase()))
  }
}
