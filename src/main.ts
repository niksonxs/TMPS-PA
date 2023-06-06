import * as readline from "readline";
import { ProductFactory } from "./products/productFactory";
import { DiscountedProduct } from "./decorators/discountedProduct";
import { ShoppingCart } from "./subject/shoppingCart";
import { ShoppingCartAdapter } from "./subject/shoppingCartAdapter";
import { AddItemCommand } from "./commands/addItemCommand";
import { CartTotalDisplay } from "./observers/cartTotalDisplay";
import { Book } from "./products/book";
import { Electronics } from "./products/electronics";
import { products as predefinedProducts } from "./const/products";
import { getCodeDiscount } from "./const/promocodes";
import { DiscountedCart } from "./decorators/discountedCart";

const productFactory = new ProductFactory();
const products = predefinedProducts.map((product) => {
  return productFactory.createProduct(
    product.type,
    product.name,
    product.price
  );
});

function displayUserMenu() {
  const menu = `
    User Menu:
    1. View Products
    2. Add Product to Cart
    3. Remove Product from Cart
    4. View Cart
    5. Checkout
    6. Enter Discount Code
    0. Exit
    Enter your choice: `;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  const shoppingCart = ShoppingCart.getInstance();

  rl.question(menu, (choice) => {
    switch (choice) {
      case "1":
        console.log("\n=== Products ===");
        products.forEach((product, index) => {
          console.log(`${index + 1}. ${product.getName()}`);
        });
        displayUserMenu();
        break;
      case "2":
        console.log("\n=== Add Product to Cart ===");
        products.forEach((product, index) => {
          console.log(`${index + 1}. ${product.getName()}`);
        });
        rl.question("Enter product number: ", (productNumber) => {
          const product = products[parseInt(productNumber) - 1];
          if (product) {
            const shoppingCart = ShoppingCart.getInstance();
            const addItemCommand = new AddItemCommand(shoppingCart, product);
            shoppingCart.executeCommand(addItemCommand);
            console.log(`Added ${product.getName()} to cart`);
          } else {
            console.log("Invalid product number");
          }
          displayUserMenu();
        });
        break;
      case "3":
        console.log("\n=== Remove Product from Cart ===");
        const items = shoppingCart.getItems();
        items.forEach((item, index) => {
          console.log(`${index + 1}. ${item.getName()}`);
        });
        rl.question("Enter product number: ", (productNumber) => {
          const product = items[parseInt(productNumber) - 1];
          if (product) {
            shoppingCart.removeItem(product);
            console.log(`Removed ${product.getName()} from cart`);
          } else {
            console.log("Invalid product number");
          }
          displayUserMenu();
        });
        break;

      case "4":
        console.log("\n=== View Cart ===");
        const itemsInCart = shoppingCart.getItems();
        itemsInCart.forEach((item, index) => {
          console.log(`${index + 1}. ${item.getName()}`);
        });
        displayUserMenu();
        break;
      case "5":
        console.log("\n=== Checkout ===");
        const total = new ShoppingCartAdapter(shoppingCart).getTotal();
        console.log(`Total: ${total}`);
        displayUserMenu();
        break;

      case "6":
        console.log("\n=== Enter Discount Code ===");

        //i need to prompt for discount code, if this code exist replace the original cart with the discounted cart and push discount code in the cart
        rl.question("Enter discount code: ", (discountCode) => {
          const codeDiscount = getCodeDiscount(discountCode);
          if (codeDiscount) {
            const discountedCart = new DiscountedCart(
              shoppingCart,
              codeDiscount
            );
            shoppingCart.setDiscountedCart(discountedCart);
            console.log(`Discount code ${discountCode} applied`);
          } else {
            console.log("Invalid discount code");
          }
          displayUserMenu();
        });
        break;

      case "0":
        rl.close();
        break;
      default:
        console.log("Invalid choice");
        displayUserMenu();
        break;
    }
  });
}

displayUserMenu();
