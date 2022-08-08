import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../Models/Book.model';
import { DataLibrary } from '../Services/DataLibrary.service';
import { ItemViewer } from '../Services/ItemViewer.service';
import { BookInfo } from '../ViewModels/BookInfo.model';

@Component({
  selector: 'book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {
  @Input() books: BookInfo[] = [];
  constructor(private dataservice: DataLibrary, private itemViewer: ItemViewer) { }

  ngOnInit(): void {
    this.books = this.dataservice.getBooksInfo();
  }

  ViewItem(book: BookInfo) {
    this.itemViewer.ShowFullInfo(book.Id);
  }

  EditItem(book: BookInfo) {
     
  }
}
