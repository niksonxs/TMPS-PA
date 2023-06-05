"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartIterator = void 0;
var ShoppingCartIterator = /** @class */ (function () {
    function ShoppingCartIterator(items) {
        this.items = items;
        this.currentIndex = 0;
    }
    ShoppingCartIterator.prototype.hasNext = function () {
        return this.currentIndex < this.items.length;
    };
    ShoppingCartIterator.prototype.next = function () {
        var item = this.items[this.currentIndex];
        this.currentIndex++;
        return item;
    };
    return ShoppingCartIterator;
}());
exports.ShoppingCartIterator = ShoppingCartIterator;
