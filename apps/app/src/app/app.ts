import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import * as Highcharts from 'highcharts';
import { ChartConstructorType, HighchartsChartComponent } from 'highcharts-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular, HighchartsChartComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Use a capital 'H' for the class property
  Highcharts: typeof Highcharts = Highcharts;

  chartConstructor: ChartConstructorType = 'chart';

  chartOptions: Highcharts.Options = {
    title: { text: 'Monthly Expenses' },
    series: [
      {
        data: [1, 2, 3],
        type: 'line',
      },
    ],
  };

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
  ];

  colDefs: ColDef[] = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];
}
