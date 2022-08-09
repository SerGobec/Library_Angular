import { Review } from "../Models/Review.model";

export class FullBookInfo {
  public Id: number = 0;
  public Author: string = "";
  public Cover: string = "";
  public Title: string = "";
  public Genre: string = "";
  public Content: string = "";
  public Score: number = 0;
  public reviews: Review[] = [];

  constructor() { this.reviews.length }
  
}
