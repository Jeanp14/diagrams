import { Component } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
  pieChartData = {
    labels: ["Bills", " Groceries", "Shopping", "Transportation", "Restauration", "Extra"],
    datasets: [{
      data: [1100, 300, 150, 50, 100, 80],
      label: 'Expenses'
    }]
  }
}
