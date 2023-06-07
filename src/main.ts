import * as readline from "readline";
import { ProductFactory } from "./products/productFactory";
import { ShoppingCart } from "./subject/shoppingCart";
import { ShoppingCartAdapter } from "./subject/shoppingCartAdapter";
import { AddItemCommand } from "./commands/addItemCommand";
import { CartTotalDisplay } from "./observers/cartTotalDisplay";
import { Book } from "./products/book";
import { Electronics } from "./products/electronics";
import { products as predefinedProducts } from "./const/products";
import { getCodeDiscount } from "./const/promoCodes";
import { DiscountedProduct } from "./decorators/discountedProduct";

const products = predefinedProducts.map((product) => {
  return ProductFactory.createProduct(
    product.type,
    product.name,
    product.price
  )
});

const  shoppingCart = ShoppingCart.getInstance();
shoppingCart.addObserver(new CartTotalDisplay());

function displayUserMenu() {
  const menu = `
    Welcome to the shopping cart application!
    Menu:
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
        const cartIterator =shoppingCart.getIterator();
        while (cartIterator.hasNext()) {
          const item = cartIterator.next();
          console.log(`${item.getName()}: ${item.getPrice()}`);
        }

        displayUserMenu();
        break;
      case "5":
        console.log("\n=== Checkout ===");
        const total = shoppingCart.getTotal();
        console.log(`Total: ${total}`);
        displayUserMenu();
        break;

      case "6":
      console.log("\n=== Enter Discount Code ===");
    
      // Prompt for discount code
      rl.question("Enter discount code: ", (discountCode) => {
        const discount = getCodeDiscount(discountCode);
        if (discount) {
          //apply discount to all items in cart
          const itemsInCart = shoppingCart.getItems();
          itemsInCart.forEach((item, index) => {
            const discountedProduct = new DiscountedProduct(item , discount );
            shoppingCart.removeItem(item);
            shoppingCart.addItem(discountedProduct);
          });
          
          
        } else {
          console.log("Invalid discount code");
        }
    
        // Display user menu after discount code prompt
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
