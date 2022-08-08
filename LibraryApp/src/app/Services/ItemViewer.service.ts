
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../Models/Book.model';
import { Rating } from '../Models/Rating.model';
import { Review } from '../Models/Review.model';
import { BookInfo } from '../ViewModels/BookInfo.model';

@Injectable()
export class ItemViewer {
  public ShowView$ = new Subject<number>();
  public Closer$ = new Subject();
  ShowFullInfo(bookId: number) {
    this.ShowView$.next(bookId);
  }

  CloseFullInfo() {
    this.Closer$.next(null);
  }
}


