import { Component } from '@angular/core';
import { Book,BOOKS } from '../modules/book';
@Component({
  selector: 'app-assgn19',
  templateUrl: './assgn19.component.html',
  styleUrl: './assgn19.component.css'
})
export class Assgn19Component {
  books: Book[] = BOOKS;


}
