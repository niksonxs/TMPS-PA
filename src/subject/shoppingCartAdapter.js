"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartAdapter = void 0;
var ShoppingCartAdapter = /** @class */ (function () {
    function ShoppingCartAdapter(shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
    ShoppingCartAdapter.prototype.getTotal = function () {
        return this.shoppingCart.getTotalPrice();
    };
    return ShoppingCartAdapter;
}());
exports.ShoppingCartAdapter = ShoppingCartAdapter;
