import { Product } from "../products/product";
import { ShoppingCart } from "../subject/shoppingCart";

export class AddItemCommand {
  item: Product;
  shoppingCart: ShoppingCart;
  constructor(shoppingCart, item) {
    this.shoppingCart = shoppingCart;
    this.item = item;
  }

  execute() {
    this.shoppingCart.addItem(this.item);
  }

  undo() {
    this.shoppingCart.removeItem(this.item);
  }
}
