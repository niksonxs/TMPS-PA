import { ShoppingCart } from "./shoppingCart";

export class ShoppingCartAdapter {
  shoppingCart: ShoppingCart;
  constructor(shoppingCart) {
    this.shoppingCart = shoppingCart;
  }

  isFreeShipping() {
    return this.getTotal() > 100;
  }

  getTotal() {
    return this.shoppingCart.items.reduce(
      (total, item) => total + item.getPrice(),
      0
    );
  }
}
