import { Product } from "../products/product.js";
import { ShoppingCart } from "../subject/shoppingCart.js";

export class DiscountedProduct extends Product {
  discountPercentage: number;
  constructor(product, discountPercentage) {
    const { name, price } = product;
    super(name, price);
    this.discountPercentage = discountPercentage;
  }

  getPrice() {
    const price = super.getPrice();
    console.log(price);
    return price - price * (this.discountPercentage / 100);
  }
}

export class DiscountedCart extends ShoppingCart {
  discountPercentage: number;
  constructor(discountPercentage) {
    super();
    this.discountPercentage = discountPercentage;
  }

  getTotalPrice() {
    const totalPrice = super.getTotalPrice();
    return totalPrice - totalPrice * (this.discountPercentage / 100);
  }
}
