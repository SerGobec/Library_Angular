import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { Book } from '../Models/Book.model';
import { BooksEditor } from '../Services/BooksEditor.service';
import { DataLibrary } from '../Services/DataLibrary.service';

@Component({
  selector: 'edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  public model: Book;
  public actionlabel: string = "";
  private subsOnEditor?: Subscription;

  base64Output: string = "";
  photoUploaded: boolean = false;

  constructor(private editor: BooksEditor, private library: DataLibrary) {
    this.model = new Book(0, "", "", "", "", "");
    this.actionlabel = "Add";
  }

  ngOnInit(): void {
    this.subsOnEditor = this.editor.ShowView$.subscribe(book => this.EditModel(book));
  }

  ngOnDestroy(): void {
    this.subsOnEditor?.unsubscribe();
  }

  EditModel(book: Book) {
    this.model = book;
    this.actionlabel = "Edit";
  }

  ClearModel() {
    this.model = new Book(0, "", "", "", "", "");
    this.actionlabel = "Add";
    this.base64Output = "";
    this.photoUploaded = false;
  }

  AddBook() {
    this.model.Cover = this.base64Output;
    this.library.SaveBook(this.model);
    this.ClearModel();
  }

  

  onFileSelected(event : any) {
    this.convertFile(event.target.files[0]).subscribe(base64 => {
      this.base64Output = base64;
    });
    this.photoUploaded = true;
  }
  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => {
      let str: any = event.target!.result!.toString();
      result.next(btoa(str));
    }
    return result;
  }

  RemovePhoto() {
    this.base64Output = "";
    this.photoUploaded = false;
  }

}
