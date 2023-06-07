import { Product } from "./product";

export class Book implements Product {
  type: string;
  name: string;
  price: number;
  constructor(name, price) {
    this.type = "book";
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }
  getPrice(): number {
    return this.price;
  }
}
