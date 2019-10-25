import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1:number = 30;
  progreso2:number = 25; 

  constructor() { }

  ngOnInit() {
  }

  cambiarValorDelVerde(evento:number){
    this.progreso2 = evento;
  }

  

}
