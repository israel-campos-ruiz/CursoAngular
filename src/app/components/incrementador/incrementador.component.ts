import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('numero')  progreso:number = 50;
  @Input() leyenda:string = ''
  @Output() cambio:EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor:number){
    if(this.progreso >= 100 && valor > 0){
      this.progreso = 100
      return
   }

   if(this.progreso < 0 && valor < 0){
     this.progreso = 0
     return;
   } 
    this.progreso += valor
    this.cambio.emit(this.progreso);
  }

 

}
