import * as readline from "readline";
import { ConcreteProductFactory } from "./src/products/productFactory.js";
import { DiscountedProduct } from "./src/decorators/discountedProduct.js";
import { ShoppingCart } from "./src/subject/shoppingCart.js";
import { ShoppingCartAdapter } from "./src/subject/shoppingCartAdapter.js";
import { AddItemCommand } from "./src/commands/addItemCommand.js";
import { PaymentSystem } from "./src/externalSystems/paymentSystem.js";
import { CartTotalDisplay } from "./src/observers/cartTotalDisplay.js";

const shoppingCart = new ShoppingCart();
const totalDisplay = new CartTotalDisplay();
const adapter = new ShoppingCartAdapter(shoppingCart);

shoppingCart.addObserver(totalDisplay);

const book = { name: "Book", price: 10.99 };
const electronics = { name: "Electronics", price: 499.99 };

const addItemCommand1 = new AddItemCommand(shoppingCart, book);
const addItemCommand2 = new AddItemCommand(shoppingCart, electronics);

shoppingCart.executeCommand(addItemCommand1);
shoppingCart.executeCommand(addItemCommand2);

console.log(adapter.getTotal()); // Output: 510.98

shoppingCart.undoLastCommand();

console.log(adapter.getTotal()); // Output: 10.99
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const productFactory = new ConcreteProductFactory();
// const shoppingCart = new ShoppingCart();

// function showAdminMenu() {
//   console.log("\n=== ADMIN MENU ===");
//   console.log("1. Add Product");
//   console.log("2. Apply Discount");
//   console.log("3. Exit");
//   rl.question("Enter your choice: ", (choice) => {
//     switch (choice) {
//       case "1":
//         rl.question("Enter product name: ", (name) => {
//           rl.question("Enter product price: ", (price) => {
//             const product = productFactory.createProduct(
//               "book",
//               name,
//               parseFloat(price)
//             );
//             console.log(`Product '${product.name}' added.`);
//             showAdminMenu();
//           });
//         });
//         break;
//       case "2":
//         rl.question("Enter product name: ", (name) => {
//           rl.question("Enter product price: ", (price) => {
//             rl.question("Enter discount percentage: ", (percentage) => {
//               const product = productFactory.createProduct(
//                 "book",
//                 name,
//                 parseFloat(price)
//               );
//               console.log(`Product '${product.getName()}' added.`);
//               const discountedProduct = new DiscountedProduct(
//                 product,
//                 parseFloat(percentage)
//               );
//               console.log(
//                 `Discount of ${percentage}% applied to the product ${JSON.stringify(
//                   discountedProduct.getName()
//                 )}.
//                 \nFinal price is ${discountedProduct.getPrice()}`
//               );
//               showAdminMenu();
//             });
//           });
//         });

//         break;
//       case "3":
//         rl.close();
//         break;
//       default:
//         console.log("Invalid choice. Please try again.");
//         showAdminMenu();
//         break;
//     }
//   });
// }

// function showCustomerMenu() {
//   console.log("\n=== CUSTOMER MENU ===");
//   console.log("1. Add to Cart");
//   console.log("2. Remove from Cart");
//   console.log("3. View Cart");
//   console.log("4. Checkout");
//   console.log("5. Exit");
//   rl.question("Enter your choice: ", (choice) => {
//     switch (choice) {
//       case "1":
//         rl.question("Enter product name: ", (name) => {
//           rl.question("Enter product price: ", (price) => {
//             const product = productFactory.createProduct(
//               "book",
//               name,
//               parseFloat(price)
//             );
//             const addItemCommand = new AddItemCommand(shoppingCart, product);
//             shoppingCart.executeCommand(addItemCommand);
//             console.log(
//               `Product '${product.name}' added to the shopping cart.`
//             );
//             showCustomerMenu();
//           });
//         });
//         break;
//       case "2":
//         rl.question("Enter product name to remove: ", (name) => {
//           const itemToRemove = shoppingCart.getItemByName(name);
//           if (itemToRemove) {
//             shoppingCart.removeItem(itemToRemove);
//             console.log(
//               `Product '${itemToRemove.name}' removed from the shopping cart.`
//             );
//           } else {
//             console.log(`Product '${name}' not found in the shopping cart.`);
//           }
//           showCustomerMenu();
//         });
//         break;
//       case "3":
//         console.log("=== SHOPPING CART ===");
//         shoppingCart.items.forEach((item, index) => {
//           console.log(`${index + 1}. ${item.name} - $${item.price}`);
//         });
//         console.log(`Total Price: $${shoppingCart.getTotalPrice()}`);
//         showCustomerMenu();
//         break;
//       case "4":
//         console.log(
//           "Checkout functionality is not implemented in this example."
//         );
//         showCustomerMenu();
//         break;
//       case "5":
//         rl.close();
//         break;
//       default:
//         console.log("Invalid choice. Please try again.");
//         showCustomerMenu();
//         break;
//     }
//   });
// }

// rl.question("Are you an admin or a customer? (admin/customer): ", (role) => {
//   if (role === "admin") {
// showAdminMenu();
//   } else if (role === "customer") {
//     showCustomerMenu();
//   } else {
//     console.log("Invalid role. Exiting...");
//     rl.close();
//   }
// });
