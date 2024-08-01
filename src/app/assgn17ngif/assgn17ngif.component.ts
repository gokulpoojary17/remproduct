import { Component } from '@angular/core';

@Component({
  selector: 'app-assgn17ngif',
  templateUrl: './assgn17ngif.component.html',
  styleUrl: './assgn17ngif.component.css'
})
export class Assgn17ngifComponent {
  number: number | null = null;
  isEven: boolean | null = null;

  find(): void {
    if (this.number !== null) {
      this.isEven = this.number % 2 === 0;
    }
  }

  reset(): void {
    this.number = null;
    this.isEven = null;
  }
}
