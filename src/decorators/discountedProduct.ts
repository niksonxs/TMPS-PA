import { Product } from "../products/product";

export class DiscountedProduct extends Product {
  discountPercentage: number;

  constructor(product: Product, discountPercentage: number) {
    super(product.name, product.price); // Pass the properties to the super constructor
    this.discountPercentage = discountPercentage;
  }

  getPrice() {
    const price = super.getPrice();
    return price - price * (this.discountPercentage / 100);
  }
}
