"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteProductFactory = void 0;
var book_js_1 = require("./book.js");
var electronics_js_1 = require("./electronics.js");
var ConcreteProductFactory = /** @class */ (function () {
    function ConcreteProductFactory() {
    }
    ConcreteProductFactory.prototype.createProduct = function (type, name, price) {
        if (type === "book") {
            return new book_js_1.Book(name, price);
        }
        else if (type === "electronics") {
            return new electronics_js_1.Electronics(name, price);
        }
        throw new Error("Invalid product type");
    };
    return ConcreteProductFactory;
}());
exports.ConcreteProductFactory = ConcreteProductFactory;
