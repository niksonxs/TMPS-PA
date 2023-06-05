import { ShoppingCart } from "./shoppingCart";

export class ShoppingCartAdapter {
  shoppingCart: ShoppingCart;
  constructor(shoppingCart) {
    this.shoppingCart = shoppingCart;
  }

  getTotal() {
    return this.shoppingCart.items.reduce(
      (total, item) => total + item.price,
      0
    );
  }
}
