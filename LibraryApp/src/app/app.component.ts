import { Component } from '@angular/core';
import { Book } from './Models/Book.Model';
import { DataLibrary } from './Services/DataLibrary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryApp';
  books: Book[] = [];

  constructor(private library: DataLibrary) { }

  ngOnInit() {
    this.books = this.library.getAllBooks();
    let elem = document.getElementById("sad"); 
  }
}
