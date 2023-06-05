export class ShoppingCartIterator {
  currentIndex: number;
  items: any;
  constructor(items) {
    this.items = items;
    this.currentIndex = 0;
  }

  hasNext() {
    return this.currentIndex < this.items.length;
  }

  next() {
    const item = this.items[this.currentIndex];
    this.currentIndex++;
    return item;
  }
}
