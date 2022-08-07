export class Book {
  public Id: number;
  public Author: string;
  public Cover: string;
  public Title: string;
  public Genre: string;
  public Content: string;
  constructor(id: number, author: string, cover: string, title: string, genre: string, content: string) {
    this.Id = id;
    this.Author = author;
    this.Cover = cover;
    this.Title = title;
    this.Genre = genre;
    this.Content = content;
  }
}
