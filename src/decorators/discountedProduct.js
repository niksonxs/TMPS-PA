"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountedCart = exports.DiscountedProduct = void 0;
var product_js_1 = require("../products/product.js");
var shoppingCart_js_1 = require("../shoppingCart/shoppingCart.js");
var DiscountedProduct = /** @class */ (function (_super) {
    __extends(DiscountedProduct, _super);
    function DiscountedProduct(product, discountPercentage) {
        var _this = this;
        var name = product.name, price = product.price;
        _this = _super.call(this, name, price) || this;
        _this.discountPercentage = discountPercentage;
        return _this;
    }
    DiscountedProduct.prototype.getPrice = function () {
        var price = _super.prototype.getPrice.call(this);
        console.log(price);
        return price - price * (this.discountPercentage / 100);
    };
    return DiscountedProduct;
}(product_js_1.Product));
exports.DiscountedProduct = DiscountedProduct;
var DiscountedCart = /** @class */ (function (_super) {
    __extends(DiscountedCart, _super);
    function DiscountedCart(discountPercentage) {
        var _this = _super.call(this) || this;
        _this.discountPercentage = discountPercentage;
        return _this;
    }
    DiscountedCart.prototype.getTotalPrice = function () {
        var totalPrice = _super.prototype.getTotalPrice.call(this);
        return totalPrice - totalPrice * (this.discountPercentage / 100);
    };
    return DiscountedCart;
}(shoppingCart_js_1.ShoppingCart));
exports.DiscountedCart = DiscountedCart;
