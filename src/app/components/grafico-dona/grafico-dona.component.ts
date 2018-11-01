import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('ChartLabels') doughnutChartLabels: string[] = [];
  // tslint:disable-next-line:no-input-rename
  @Input('ChartData') doughnutChartData: number[] = [];
  // tslint:disable-next-line:no-input-rename
  @Input('ChartType') doughnutChartType: '';

  constructor() { }

  ngOnInit() {
  }

}
