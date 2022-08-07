
import { Injectable } from '@angular/core';
import { Book } from '../Models/Book.Model';
import { Rating } from '../Models/Rating.model';
import { Review } from '../Models/Review.model';

@Injectable()
export class DataLibrary {
  private books: Book[] = [new Book(1, "J. K. Rowling", "", "Harry Potter and the Philosopher's Stone", "Fantasy", ""),
  new Book(2, "Stephen King", "", "It", "Horror", "")
  ];

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

  getRatingForBook(id: number): Rating | null{
    if (this.ratings.filter(el => el.BookId == id).length > 0) {
      return this.ratings.filter(el => el.BookId == id)[0];
    }
    return null;
  }
  
}


