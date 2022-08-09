
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
    new Book(2, "Stephen King", "", "It", "Horror", ""),
    new Book(3, "Robert Louis Stevenson", "", "Treasure Island", "Adventure fiction", "The plot is set in the mid-18th century, when an old sailor who identifies himself as The Captain starts to lodge at the rural Admiral Benbow Inn on England's Bristol Channel. He tells the innkeeper's son, Jim Hawkins, to keep a lookout for a one-legged seafaring man. A former shipmate named Black Dog confronts The Captain about a chart. They get into a violent fight, causing Black Dog to flee..."),
    new Book(4, "Bram Stoker", "", "Dracula", "Horror", "Dracula is a novel by Bram Stoker, published in 1897. As an epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. It has no single protagonist, but opens with solicitor Jonathan Harker taking a business trip to stay at the castle of a Transylvanian noble, Count Dracula. Harker escapes the castle after discovering that Dracula is a vampire."),
    new Book(5, "Stephen King", "", "The Shining", "Horror", "The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies. His family accompanies him on this job, including his young son Danny Torrance, who possesses the shining, an array of psychic abilities that allow Danny to see the hotel's horrific past."),
    new Book(6, "William Peter Blatty", "", "The Exorcist", "Horror", "An elderly Jesuit priest named Father Lankester Merrin is leading an archaeological dig in northern Iraq and is studying ancient relics. After discovering a small statue of the demon Pazuzu (an actual ancient Assyrian demon), a series of omens alerts him to a pending confrontation with a powerful evil, which, unknown to the reader at this point, he has battled before in an exorcism in Africa."),
    new Book(7, "Andy Weir", "", "The Martian", "Science fiction", "In the year 2035, the crew of NASA's Ares 3 mission have arrived at Acidalia Planitia for a planned month-long stay on Mars. After only six sols, an intense dust and wind storm threatens to topple their Mars Ascent Vehicle (MAV), which would trap them on the planet. During the hurried evacuation, an antenna tears loose and impales astronaut Mark Watney, a botanist and engineer, also disabling his spacesuit radio. He is flung out of sight by the wind and presumed dead. As the MAV teeters dangerously, mission commander Melissa Lewis has no choice but to take off without completing the search for Watney."),
    new Book(8, "George Orwell", "", "Nineteen Eighty-Four", "Science fiction", "In London, Winston Smith is a member of the Outer Party, working at the Ministry of Truth, where he rewrites historical records to conform to the state's ever-changing version of history. Winston revises past editions of The Times, while the original documents are destroyed after being dropped into ducts known as memory holes, which lead to an immense furnace. He secretly opposes the Party's rule and dreams of rebellion, despite knowing that he is already a thought-criminal and is likely to be caught one day."),
    new Book(9, "Jung Hyun-jung", "", "Romance Is a Bonus", "Romantic comedy", " When Cha Eun-ho was a child, Kang Dan-i saved him from an accident and was injured. Kang Dan-i had Cha Eun-ho help her while she was recuperating in hospital and later on bedrest for one year. By helping her acquire books to read from the library, Cha Eun-ho himself became interested in writing."),
    new Book(10, "Colleen Hoover", "", "It Ends with Us", "Romance", "It Ends with Us focuses on Lily Bloom, a young college graduate who moves to Boston and opens her own floral business. She develops feelings for surgeon Ryle Kincaid, who is initially reluctant toward having a serious relationship with her. As their relationship blossoms, Lily has a sudden encounter with her first love Atlas Corrigan."),
    new Book(11, "Dale Carnegie", "", "How to Win Friends and Influence People", "Self-help", "How to Win Friends and Influence People was written for a popular audience and Carnegie successfully captured the attention of his target. The book experienced mass consumption and appeared in many popular periodicals, including garnering 10 pages in the January 1937 edition of Reader's Digest."),
    new Book(12, "Frank Herbert", "", "Dune", "Science fiction", "Duke Leto Atreides of House Atreides, ruler of the ocean planet Caladan, is assigned by the Padishah Emperor Shaddam IV to serve as fief ruler of the planet Arrakis. Although Arrakis is a harsh and inhospitable desert planet, it is of enormous importance because it is the only planetary source of melange, or the spice, a unique and incredibly valuable substance that extends human youth, vitality and lifespan. It is also through the consumption of spice that Spacing Guild Navigators are able to effect safe interstellar travel.")
  ];

  public booksCkecker$ = new Subject<Book[]>();

  private ratings: Rating[] = [ 
    new Rating(1, 1, 4.65),
    new Rating(2, 2, 3.00),
    new Rating(3,3, 3.92),
    new Rating(4,4, 4.82),
    new Rating(5,5, 4.21),
    new Rating(6,6, 3.82),
    new Rating(7,7, 4.13),
    new Rating(8,8, 3.92),
    new Rating(9,9, 3.3),
    new Rating(10,10, 2.9),
    new Rating(11,11, 5),
    new Rating(12,12, 4.4),
  ]

  private reviews: Review[] = [
    new Review(1, 1, "Cool book)", "Serhii"),
    new Review(2, 1, "My favorite book", "Mr. Awesome"),
    new Review(3, 2, "Wow..I am scared...", "Mickhael J."),
    new Review(4, 3, "Treasure Island is one of the greatest adventure novels.", "Nick"),
    new Review(5, 3, "Treasure Island was one of my favorites", "Korben"),
    new Review(6, 11, "The best book i have ever read", "Serhii Pohrebets" )
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
    let books: BookInfo[] = [];
    books = this.getBooksInfo();
    var result2: BookInfo[] = books.sort((obj1, obj2) => {
      if (obj1.Score > obj2.Score) return -1;
      if (obj1.Score < obj2.Score) return 1;
      return 0;
    });
    if (result2.length < 10) return result2;
    return result2.slice(0, 10);
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


