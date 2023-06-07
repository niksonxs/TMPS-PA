import { ShoppingCart } from "../subject/shoppingCart";
import { ShoppingCartAdapter } from "../subject/shoppingCartAdapter";

export class CartTotalDisplay {
  update(cart: ShoppingCart) {
    const totalPrice = cart.getTotal();

    console.log(`Total price: ${totalPrice}`);
  }
}
