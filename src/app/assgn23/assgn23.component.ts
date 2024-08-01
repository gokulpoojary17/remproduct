import { Component } from '@angular/core';

@Component({
  selector: 'app-assgn23',
  templateUrl: './assgn23.component.html',
  styleUrl: './assgn23.component.css'
})
export class Assgn23Component {
  title = 'pipes-demo';

  // Define properties for demonstration
  upperText: string = 'Hello World';
  lowerText: string = 'Angular PIPES';
  moneyAmount: number = 1234.56;
  decimalValue: number = 0.1234;
  percentValue: number = 0.5678;
  currentDate: Date = new Date();
}
