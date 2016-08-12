import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { Book, ApiBook } from '../models/book';


@Injectable()
export class BooksService {
  private API_PATH: string = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: Http) { }

  private searchBooksApi(query: string): Observable<ApiBook[]> {
    return this.http.get(`${this.API_PATH}?q=${query}`)
      .map(response => response.json().items);
  }

  private mapApiBook(book: ApiBook): Book {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      publishDate: book.volumeInfo.publishDate,
      description: book.volumeInfo.description,
      thumbnail: book.volumeInfo.imageLinks ?
        book.volumeInfo.imageLinks.thumbnail : null
    }
  }

  getBooks(query: string): Observable<Book[]> {
    return this.searchBooksApi(query)
      .map(results => results.map(book => this.mapApiBook(book)));
  }
}
