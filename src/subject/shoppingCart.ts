import { AddItemCommand } from "../commands/addItemCommand";
import { ShoppingCartIterator } from "../iterators/shoppingCartIterator";
import { CartTotalDisplay } from "../observers/cartTotalDisplay";
import { Product } from "../products/product";

export class ShoppingCart {
  commands: AddItemCommand[];
  items: Product[];
  observers: CartTotalDisplay[] = [new CartTotalDisplay()];
  discountPercentage: number = 0;
  private static instance: ShoppingCart | null = null;
  constructor() {
    this.items = [];
    this.observers = [];
    this.commands = [];
  }

  static getInstance() {
    if (!ShoppingCart.instance) {
      ShoppingCart.instance = new ShoppingCart();
    }
    return ShoppingCart.instance;
  }

  addItem(item: Product) {
    this.items.push(item);
    this.notifyObservers();
  }

  getItems() {
    return this.items;
  }

  addObserver(observer: CartTotalDisplay) {
    this.observers.push(observer);
  }

  executeCommand(command) {
    command.execute();
    this.commands.push(command);
  }

  getIterator() {
    return new ShoppingCartIterator(this.items);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.items));
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.notifyObservers();
    }
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  undoLastCommand() {
    const lastCommand = this.commands.pop();
    if (lastCommand) {
      lastCommand.undo();
    }
  }

  setDiscountedCart(cart) {
    this.discountPercentage = cart.discountPercentage;
    this.notifyObservers();
  }
}
