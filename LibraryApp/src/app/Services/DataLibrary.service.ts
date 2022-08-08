
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../Models/Book.model';
import { Rating } from '../Models/Rating.model';
import { Review } from '../Models/Review.model';
import { BookInfo } from '../ViewModels/BookInfo.model';

@Injectable()
export class DataLibrary {
  private books: Book[] = [new Book(1, "J. K. Rowling", "", "Harry Potter and the Philosopher's Stone", "Fantasy", ""),
  new Book(2, "Stephen King", "", "It", "Horror", "")
  ];

  public booksCkecker$ = new Subject<Book[]>();

  private ratings: Rating[] = [ 
    new Rating(1, 1, 4.65),
    new Rating(2, 2, 3.00),
  ]

  private reviews: Review[] = [
    new Review(1, 1, "ccol", "Serhii"),
    new Review(2, 2, "nice", "Pavlo")
  ]

  getAllBooks(): Book[] {
    return this.books;
  }

  getRecommended(genre: string): Book[] {
    let result: Book[] = this.books;
    if (genre != null || genre != "") {
      result = result.filter(el => el.Genre == genre);
    }
    return result;
  }

  getBooksInfo(): BookInfo[] {
    let result : BookInfo[] = [];
    for (let i = 0; i < this.books.length; i++) {
      let bookinfo: BookInfo = new BookInfo();
      bookinfo.Id = this.books[i].Id;
      bookinfo.Cover = this.books[i].Cover;
      bookinfo.ReviewCount = this.reviews.filter(el => el.BookId == this.books[i].Id).length;
      bookinfo.Title = this.books[i].Title;
      if (this.ratings.filter(el => el.BookId == this.books[i].Id).length > 0) {
        bookinfo
          .Score = this.ratings.filter(el => el.BookId == this.books[i].Id)[0].Score;
      }
      result.push(bookinfo);
    }
    return result;
  }

  getRecommendedBooksInfo(): BookInfo[] {
    let result: BookInfo[] = [];
    /*this.books.sort(el => this.ratings.filter(el1 => el1.BookId == el.Id)[0].Score);
    let leng = 10;
    if (this.books.length < leng) leng = this.books.length;
    for (let i = 0; i < this.books.length; i++) {
      let bookinfo: BookInfo = new BookInfo();
      bookinfo.Id = this.books[i].Id;
      bookinfo.Cover = this.books[i].Cover;
      bookinfo.ReviewCount = this.reviews.filter(el => el.BookId == this.books[i].Id).length;
      bookinfo.Title = this.books[i].Title;
      if (this.ratings.filter(el => el.BookId == this.books[i].Id).length > 0) {
        bookinfo
          .Score = this.ratings.filter(el => el.BookId == this.books[i].Id)[0].Score;
      }
      result.push(bookinfo);
    }
    result = result.sort(el => el.Score);
    if (result.length <= 10) return result;*/
    return result;
  }

  getRatingForBook(id: number): Rating | null{
    if (this.ratings.filter(el => el.BookId == id).length > 0) {
      return this.ratings.filter(el => el.BookId == id)[0];
    }
    return null;
  }

  addBook() {
    this.books.push(new Book(1, "", "", "", "", ""));
    this.booksCkecker$.next(this.books);
  }
  
}


