import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Book } from './Models/Book.model';
import { DataLibrary } from './Services/DataLibrary.service';
import { ItemViewer } from './Services/ItemViewer.service';
import { FullBookInfo } from './ViewModels/FullBookInfo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showFullInfo: boolean;
  private subsOnCloser?: Subscription;
  private subsOnOpener?: Subscription;
  public bookForView?: FullBookInfo;
  constructor(private dataService: DataLibrary, private viewService: ItemViewer) {
    this.showFullInfo = false;
  }

  addItem(name: string) {
    this.dataService.addBook();
  }

  ngOnInit() {
    this.subsOnCloser = this.viewService.Closer$.subscribe(() => this.CloseFullInfo());
    this.subsOnOpener = this.viewService.ShowView$.subscribe((id) => this.ShowFullinfo(id));
  }

  ngOnDestroy() {
    this.subsOnCloser?.unsubscribe();
    this.subsOnOpener?.unsubscribe();
  }

  CloseFullInfo() {
    this.showFullInfo = false;
    console.log("Closed full info");
  }

  ShowFullinfo(bookId: number) {
    this.showFullInfo = true;
    console.log("Showed full info");
    this.bookForView = this.dataService.getFullInfo(bookId);
  }
}
