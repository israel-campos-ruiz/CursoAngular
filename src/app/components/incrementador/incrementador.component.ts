import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  
  @ViewChild('textProgress', { static: false }) textProgress:ElementRef;
  @Input('numero')  progreso:number = 50;
  @Input() leyenda:string = ''
  @Output() cambio:EventEmitter<number> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  
  onChange(newValue:number){
    console.log(newValue);


   

    if(newValue >=100){
      this.progreso = 100
    } else if(newValue <= 0){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }
    
    this.textProgress.nativeElement.value = this.progreso;
    this.cambio.emit(this.progreso);
    this.textProgress.nativeElement.focus();
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
