import { Component } from '@angular/core';

@Component({
  selector: 'app-assgn22',
  templateUrl: './assgn22.component.html',
  styleUrl: './assgn22.component.css'
})
export class Assgn22Component {
  numberOfRows: number=0;
  pyramid: string = '';

  generatePyramid() {
    this.pyramid = '';
    if (this.numberOfRows > 0) {
      for (let i = 1; i <= this.numberOfRows; i++) {
        let spaces = ' '.repeat(this.numberOfRows -i);
        let stars = '* '.repeat(i);
        this.pyramid += spaces + stars.trim() + '\n';
      }
    }
  }

}
