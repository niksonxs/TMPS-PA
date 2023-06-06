import { ShoppingCart } from "../subject/shoppingCart";
import { ShoppingCartAdapter } from "../subject/shoppingCartAdapter";

export class DiscountedCart extends ShoppingCartAdapter {
  cart: ShoppingCart;
  discountPercentage: number;

  constructor(cart, discountPercentage) {
    super(cart);
    this.discountPercentage = discountPercentage;
  }

  getTotalPrice() {
    const totalPrice = super.getTotal();
    return totalPrice - totalPrice * (this.discountPercentage / 100);
  }
}
