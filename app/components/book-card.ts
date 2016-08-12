import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../models/book';

@Component({
  selector: 'book-card',
  template: `
    <md-card>
      <md-card-title-group>
        <md-card-title>{{ book.title }}</md-card-title>
        <md-card-title *ngIf="book.subtitle">{{ book.subtitle }}</md-card-title>
        <img [src]="book.thumbnail" md-card-sm-image *ngIf="book.thumbnail">
      </md-card-title-group>
      <md-card-content>
        <p [innerHtml]="book.description"></p>
      </md-card-content>
      <md-card-footer>
        <h5>Written By:</h5>
        <ul>
          <li *ngFor="let author of book.authors">{{ author }}</li>
        </ul>
      </md-card-footer>
      <md-card-actions align="end">
        <button md-raised-button color="warn" *ngIf="inCollection" (click)="remove.emit(book)">
          Remove Book from Collection
        </button>
        <button md-raised-button color="primary" *ngIf="!inCollection" (click)="add.emit(book)">
          Add Book to Collection
        </button>
      </md-card-actions>
    </md-card>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      margin: 75px 0;
    }
    md-card {
      max-width: 600px;
    }
    md-card-title {
      margin-left: 10px;
    }
    img {
      width: 60px;
      min-width: 60px;
      margin-left: 5px;
    }
    md-card-content {
      margin-top: 15px;
      margin-bottom: 125px;
    }
    md-card-footer {
      padding-bottom: 75px;
    }
  `]
})
export class BookCardComponent {
  @Input() book: Book;
  @Input() inCollection: boolean;
  @Output() add = new EventEmitter<Book>();
  @Output() remove = new EventEmitter<Book>();
}
