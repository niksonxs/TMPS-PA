import { Product } from "../products/product";

export class CartTotalDisplay {
  update(items: Product[]) {
    const totalPrice = items.reduce((total, item) => {
      return total + item.getPrice();
    }, 0);
    console.log(`Total price: ${totalPrice}`);
  }
}
