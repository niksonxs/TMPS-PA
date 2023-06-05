"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var productFactory_js_1 = require("./src/products/productFactory.js");
var discountedProduct_js_1 = require("./src/decorators/discountedProduct.js");
var shoppingCart_js_1 = require("./src/shoppingCart/shoppingCart.js");
// import { AddItemCommand } from "./src/commands/addItemCommand.js";
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var productFactory = new productFactory_js_1.ConcreteProductFactory();
var shoppingCart = new shoppingCart_js_1.ShoppingCart();
function showAdminMenu() {
    console.log("\n=== ADMIN MENU ===");
    console.log("1. Add Product");
    console.log("2. Apply Discount");
    console.log("3. Exit");
    rl.question("Enter your choice: ", function (choice) {
        switch (choice) {
            case "1":
                rl.question("Enter product name: ", function (name) {
                    rl.question("Enter product price: ", function (price) {
                        var product = productFactory.createProduct("book", name, parseFloat(price));
                        console.log("Product '".concat(product.name, "' added."));
                        showAdminMenu();
                    });
                });
                break;
            case "2":
                rl.question("Enter product name: ", function (name) {
                    rl.question("Enter product price: ", function (price) {
                        rl.question("Enter discount percentage: ", function (percentage) {
                            var product = productFactory.createProduct("book", name, parseFloat(price));
                            console.log("Product '".concat(product.getName(), "' added."));
                            var discountedProduct = new discountedProduct_js_1.DiscountedProduct(product, parseFloat(percentage));
                            console.log("Discount of ".concat(percentage, "% applied to the product ").concat(JSON.stringify(discountedProduct.getName()), ".\n                \nFinal price is ").concat(discountedProduct.getPrice()));
                            showAdminMenu();
                        });
                    });
                });
                break;
            case "3":
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please try again.");
                showAdminMenu();
                break;
        }
    });
}
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
showAdminMenu();
//   } else if (role === "customer") {
//     showCustomerMenu();
//   } else {
//     console.log("Invalid role. Exiting...");
//     rl.close();
//   }
// });
