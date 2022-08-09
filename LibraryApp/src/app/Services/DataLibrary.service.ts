
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../Models/Book.model';
import { Rating } from '../Models/Rating.model';
import { Review } from '../Models/Review.model';
import { BookInfo } from '../ViewModels/BookInfo.model';
import { FullBookInfo } from '../ViewModels/FullBookInfo.model';

@Injectable()
export class DataLibrary {
  private books: Book[] = [new Book(1, "J. K. Rowling", "", "Harry Potter and the Philosopher's Stone", "Fantasy", "textetxttsdf"),
  new Book(2, "Stephen King", "", "It", "Horror", "")
  ];

  public booksCkecker$ = new Subject<Book[]>();

  private ratings: Rating[] = [ 
    new Rating(1, 1, 4.65),
    new Rating(2, 2, 3.00),
  ]

  private reviews: Review[] = [
    new Review(1, 1, "ccol", "Serhii"),
    new Review(3, 1, "ccol", "Serhii"),
    new Review(4, 1, "Lorem ipsum dolor sit amet. Qui debitis nemo sed placeat iure et adipisci perferendis ab assumenda placeat. 33 aliquam aperiam ad magni sunt non odit odit id explicabo sunt eum repellendus minima. Non maxime earum ut iure iusto sed fugiat esse aut vero numquam ex corporis modi sit voluptatem galisum! 33 nulla eius aut mollitia quis a incidunt magni qui sequi facere est aspernatur consequatur qui inventore quaerat in aspernatur ducimus.Ut laborum voluptates et velit culpa 33 sequi quis aut exercitationem omnis non reiciendis asperiores et maiores porro qui nesciunt laboriosam.Id error dolore a nemo impedit vel voluptates atque et iste eius! Et sunt culpa non impedit explicabo non aliquid quaerat.Ut internos voluptatibus vel Quis ratione qui delectus distinctio quo nihil saepe sit error doloribus rem voluptates aspernatur.Aut maxime eaque nam voluptatem accusantium et expedita ipsa ea accusantium debitis.Qui temporibus aperiam ut eveniet cupiditate rem nemo quia ut", "Serhii"),
    new Review(5, 1, "ccol", "Serhii"),
    new Review(6, 1, "ccol", "Serhii"),
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

  SaveBook(book: Book) {
    if (this.books.filter(el => el.Id == book.Id).length > 0) {
      this.books.filter(el => el.Id == book.Id)[0].Author = book.Author;
      this.books.filter(el => el.Id == book.Id)[0].Content = book.Content;
      this.books.filter(el => el.Id == book.Id)[0].Cover = book.Cover;
      this.books.filter(el => el.Id == book.Id)[0].Genre = book.Genre;
      this.books.filter(el => el.Id == book.Id)[0].Title = book.Title;
    } else {
      if (book.Id == 0) {
        book.Id = this.books.sort(el => el.Id)[this.books.length - 1].Id + 1;
      }
      this.books.push(book);
    }
    this.booksCkecker$.next(this.books);
  }

  findBookById(bookId: number): Book | undefined {
    if (this.books.filter(el => el.Id == bookId).length > 0) {
      return this.books.filter(el => el.Id == bookId)[0];
    }
    return undefined;
  }

  getFullInfo(bookId: number): FullBookInfo | undefined {
    let info: FullBookInfo = new FullBookInfo();
    if (this.books.filter(el => el.Id == bookId).length == 0) return undefined;
    let book: Book = this.books.filter(el => el.Id == bookId)[0];
    info.Id = book.Id;
    info.Author = book.Author;
    info.Content = book.Content;
    info.Cover = book.Cover;
    info.Genre = book.Genre;
    info.Title = book.Title;
    info.reviews = this.reviews.filter(el => el.BookId == bookId);
    if (this.ratings.filter(el => el.BookId == bookId).length > 0) {
      info.Score = this.ratings.filter(el => el.BookId == bookId)[0].Score;
    }
    return info;
  }
}


