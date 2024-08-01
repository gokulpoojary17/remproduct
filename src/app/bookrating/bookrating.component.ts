
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bookrating',
  templateUrl: './bookrating.component.html',
    styleUrl: './bookrating.component.css'


})
export class BookratingComponent {
  @Output() ratingEvent = new EventEmitter<number>();

  rateBook() {
    const rating = Math.floor(Math.random() * 10) + 1;
    this.ratingEvent.emit(rating);
  }
}
