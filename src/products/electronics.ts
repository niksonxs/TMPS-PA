import { Product } from "./product";

export class Electronics implements Product {
  type: string;
  name: string;
  price: number;

  constructor(name, price) {
    this.type = "electronics";
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
