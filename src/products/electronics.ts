import { Product } from "./product";

export class Electronics extends Product {
  type: string;
  constructor(name, price) {
    super(name, price);
    this.type = "electronics";
  }
}
