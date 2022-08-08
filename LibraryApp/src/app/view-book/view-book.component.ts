import { Component, OnInit } from '@angular/core';
import { DataLibrary } from '../Services/DataLibrary.service';
import { Subscription } from 'rxjs';
import { Book } from '../Models/Book.model';

@Component({
  selector: 'view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  counter: number = 0;
  private subs!: Subscription;

  constructor(private service: DataLibrary) {  }

  ngOnInit(): void {
    this.subs = this.service
      .booksCkecker$.subscribe((el) => this.Counter(el))
    this.counter = this.service.getAllBooks().length;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  Counter(list: Book[]) {
    this.counter = list.length;
  }
}
