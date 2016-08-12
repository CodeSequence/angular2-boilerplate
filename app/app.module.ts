import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { HttpModule } from '@angular/http';

import { BookCardComponent } from './components/book-card';
import { HeaderComponent } from './components/header';
import { AppComponent } from './app.component';

import { BooksService } from './services/books-service';


@NgModule({
  imports: [
    BrowserModule,
    MdCoreModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    HttpModule
  ],
  declarations: [
    BookCardComponent,
    HeaderComponent,
    AppComponent
  ],
  providers: [
    BooksService
  ],
  entryComponents: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
