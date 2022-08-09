
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../Models/Book.model';
import { Rating } from '../Models/Rating.model';
import { Review } from '../Models/Review.model';
import { BookInfo } from '../ViewModels/BookInfo.model';
import { DataLibrary } from './DataLibrary.service';

@Injectable()
export class BooksEditor {
  public ShowView$ = new Subject<Book>();

  constructor(private library: DataLibrary) { }

  EditBook(bookId: number) {
    let book: Book | undefined = this.library.findBookById(bookId);
    if (book == undefined) return;
    this.ShowView$.next(book);
  }

}


