import { Book } from "./book.js";
import { Electronics } from "./electronics.js";
import { Product } from "./product.js";

interface ProductFactory {
  createProduct(type: string, name: string, price: number): Product;
}

export class ConcreteProductFactory implements ProductFactory {
  createProduct(type: string, name: string, price: number): Product {
    if (type === "book") {
      return new Book(name, price);
    } else if (type === "electronics") {
      return new Electronics(name, price);
    }
    throw new Error("Invalid product type");
  }
}
