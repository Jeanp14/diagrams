import { Component } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent {
  lineChartData = {
    labels: ["Jan", " Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
      data: [1847, 1503, 1498, 1707, 2251, 1564, 1991, 2105, 1587, 1827, 1304, 1634],
      label: 'Monthly Expenses',
      fill: true,
      backgroundColor: 'rgba(0, 0, 100, 0.3)',
      hoverBackgroundColor: 'rgba(0, 0, 100, 0.3)',
      borderColor: 'black',
      tension: 0.3,
      responsive: true
    },
    {
      data: [3201, 2957, 3201, 3007, 3201, 3201, 1700, 3201, 3007, 3201, 3007, 2543,],
      label: 'Monthly Income',
      fill: true,
      backgroundColor: 'rgba(255, 255, 0, 0.3)',
      borderColor: 'black',
      tension: 0.3
    }
  ]
  }
}
