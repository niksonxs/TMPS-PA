import { Product } from "./product";

export class Book extends Product {
  type: string;
  constructor(name, price) {
    super(name, price);
    this.type = "book";
  }
}
