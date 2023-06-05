"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartTotalDisplay = void 0;
var CartTotalDisplay = /** @class */ (function () {
    function CartTotalDisplay() {
    }
    CartTotalDisplay.prototype.update = function (items) {
        var totalPrice = items.reduce(function (total, item) { return total + item.price; }, 0);
        console.log("Total Price: $".concat(totalPrice));
    };
    return CartTotalDisplay;
}());
exports.CartTotalDisplay = CartTotalDisplay;
