import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  @Input('label') doughnutChartLabels:string [] = [];
  @Input('data') doughnutChartData: any [] = [];
  @Input('type') doughnutChartType:string  = 'doughnut';


  constructor() { }

  ngOnInit() {
  }

}
