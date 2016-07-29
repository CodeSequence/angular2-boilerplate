import { Component } from '@angular/core';

import { Book } from './models/book';
import { HeaderComponent } from './components/header';
import { BookCardComponent } from './components/book-card';


@Component({
  selector: 'books-app',
  directives: [ HeaderComponent, BookCardComponent ],
  template: `
    <books-header></books-header>

    <book-card [book]="book" [inCollection]="inCollection" (add)="add()" (remove)="remove()"></book-card>
  `
})
export class AppComponent {
  inCollection = false;
  book: Book = {
    title: 'The Stand',
    authors: [ 'Stephen King' ],
    publishDate: '2008-06-24',
    description: `
      A patient escapes from a biological testing facility,
      unknowingly carrying a deadly weapon: a mutated strain
      of super-flu that will wipe out 99 percent of the world’s
      population within a few weeks.
    `,
    thumbnail: 'http://books.google.com/books/content?id=UbfnTcmkaKkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
  };

  add() {
    this.inCollection = true;
  }

  remove() {
    this.inCollection = false;
  }
}
