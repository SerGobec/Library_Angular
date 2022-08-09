import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataLibrary } from '../Services/DataLibrary.service';
import { BookInfo } from '../ViewModels/BookInfo.model';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  ShowAllswitcher: boolean = true;
  books: BookInfo[] = [];
  private subsOnOpener?: Subscription;
  constructor(private library: DataLibrary) { }

  ShowAll() {
    this.ShowAllswitcher = true;
    console.log("ShowAll");
    this.books = this.library.getBooksInfo();
  }

  ShowReccomended() {
    this.ShowAllswitcher = false;
    this.books = this.library.getRecommendedBooksInfo();
    console.log("ShowRecommended");
  }

  ngOnInit(): void {
    this.subsOnOpener = this.library.booksCkecker$.subscribe(() => this.UpdateBooks())
  }

  ngOnDestroy() {
    this.subsOnOpener?.unsubscribe();
  }

  UpdateBooks() {
    if (this.ShowAllswitcher) {
      this.books = this.library.getBooksInfo();
    } else {
      this.books = this.library.getRecommendedBooksInfo();
    }
  }

}
