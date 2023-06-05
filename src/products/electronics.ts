import { Product } from "./product.js";

export class Electronics extends Product {
  type: string;
  constructor(name, price) {
    super(name, price);
    this.type = "electronics";
  }
}
