import { Component ,OnInit} from '@angular/core';
import { Book, BOOKS } from '../modules/book';

@Component({
  selector: 'app-assgn18',
  templateUrl: './assgn18.component.html',
  styleUrl: './assgn18.component.css'
})
export class Assgn18Component implements OnInit{
  books: Book[] = BOOKS;
  constructor() { }

  ngOnInit(): void {
  }
}

