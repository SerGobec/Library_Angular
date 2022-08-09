export class Rating {
  public Id: number;
  public BookId: number;
  public Score: number;
  constructor(id: number, bookId: number, score: number) {
    this.Id = id;
    this.BookId = bookId;
    this.Score = score;
  }
}
