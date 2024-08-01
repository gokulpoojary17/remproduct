import { Component, Input } from '@angular/core';
import { Book } from '../modules/book';
@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrl: './bookdetail.component.css'
})
export class BookdetailComponent {
  @Input() book!: Book;
  receiveRating(rating: number) {
    alert(`Rating for ${this.book.title} is ${rating}`);
  }
}
