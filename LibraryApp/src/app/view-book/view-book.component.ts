import { Component, Input, OnInit } from '@angular/core';
import { DataLibrary } from '../Services/DataLibrary.service';
import { Subscription } from 'rxjs';
import { Book } from '../Models/Book.model';
import { ItemViewer } from '../Services/ItemViewer.service';
import { FullBookInfo } from '../ViewModels/FullBookInfo.model';

@Component({
  selector: 'view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {
  @Input() model: FullBookInfo | undefined;

  constructor(private itemViewer: ItemViewer) { }

  CloseView() {
    console.log("Close View");
    this.itemViewer.CloseFullInfo();
  }
}
