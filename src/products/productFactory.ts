import { Book } from "./book";
import { Electronics } from "./electronics";
import { Product } from "./product";

export class ProductFactory {
  static createProduct(type: string, name: string, price: number): Product {
    if (type === "book") {
      return new Book(name, price);
    } else if (type === "electronics") {
      return new Electronics(name, price);
    }
    throw new Error("Invalid product type");
  }
}
