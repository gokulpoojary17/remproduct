import { Component } from '@angular/core';

@Component({
  selector: 'app-assgn17ngswitch',
  templateUrl: './assgn17ngswitch.component.html',
  styleUrl: './assgn17ngswitch.component.css'
})
export class Assgn17ngswitchComponent {
  number: number | null = null;
  isEven: boolean | null = null;

  find(): void {
    if (this.number!== null) {
      this.isEven = this.number % 2 === 0;
    }
  
  }

  reset(): void {
    this.number = null;
  }

}
