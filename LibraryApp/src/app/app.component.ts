import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './Models/Book.model';
import { DataLibrary } from './Services/DataLibrary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newItem: string = "";
  items: string[] = [];
  users: Observable<string[]> | undefined;

  constructor(private dataService: DataLibrary) { }



  addItem(name: string) {
    this.dataService.addBook();
  }
  ngOnInit() {
    
  }
}
