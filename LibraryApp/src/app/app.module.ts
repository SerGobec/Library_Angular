import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksPageComponent } from './books-page/books-page.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { DataLibrary } from './Services/DataLibrary.service';
import { FormsModule } from '@angular/forms';
import { ItemViewer } from './Services/ItemViewer.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    BookListComponent,
    BookListItemComponent,
    EditBookComponent,
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataLibrary, ItemViewer],
  bootstrap: [AppComponent]
})
export class AppModule { }
