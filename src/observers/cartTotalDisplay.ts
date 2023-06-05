export class CartTotalDisplay {
  update(items) {
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    console.log(`Total Price: $${totalPrice}`);
  }
}
