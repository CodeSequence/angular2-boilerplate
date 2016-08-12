import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from './models/book';
import { BooksService } from './services/books-service';


@Component({
  selector: 'books-app',
  template: `
    <books-header></books-header>

    <book-card
      *ngFor="let book of books$ | async"
      [book]="book"
      [inCollection]="inCollection"
      (add)="add()"
      (remove)="remove()">
    </book-card>
  `
})
export class AppComponent {
  inCollection = false;
  books$: Observable<Book[]>;

  constructor(booksService: BooksService) {
    this.books$ = booksService.getBooks('Stephen King');
  }

  add() {
    this.inCollection = true;
  }

  remove() {
    this.inCollection = false;
  }
}
