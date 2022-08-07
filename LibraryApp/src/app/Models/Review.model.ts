export class Review {
  public Id: number;
  public BookId: number;
  public Message: string;
  public Review: string;
  constructor(id: number, bookId: number, message: string, review: string) {
    this.Id = id;
    this.BookId = bookId;
    this.Message = message;
    this.Review = review;
  }
}
