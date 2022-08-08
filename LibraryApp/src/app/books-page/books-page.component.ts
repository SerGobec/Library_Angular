import { Component, OnInit } from '@angular/core';
import { DataLibrary } from '../Services/DataLibrary.service';

@Component({
  selector: 'books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  counter: number = 0;
  constructor(private dataLibrary: DataLibrary) { }

  ngOnInit(): void {
    this.counter = this.dataLibrary.getAllBooks().length;
  }

  ngOnChange(): void {
    this.counter = this.dataLibrary.getAllBooks().length;
  }
}
