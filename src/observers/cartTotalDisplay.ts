import { Product } from "../products/product";

export class CartTotalDisplay {
  update(items: Product[]) {
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    console.log(`Total Price: $${totalPrice}`);
  }
}
