import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  barChartData = {
    labels: ["Mon", " Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      data: [25, 50, 0, 11, 7, 0, 17],
      label: 'Weekly Expenses'
    }]
  }
}
