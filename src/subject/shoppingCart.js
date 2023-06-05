"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
var shoppingCartIterator_js_1 = require("../iterators/shoppingCartIterator.js");
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
        this.observers = [];
        this.commands = [];
    }
    ShoppingCart.prototype.addItem = function (item) {
        this.items.push(item);
        this.notifyObservers();
    };
    ShoppingCart.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    ShoppingCart.prototype.executeCommand = function (command) {
        command.execute();
        this.commands.push(command);
    };
    ShoppingCart.prototype.getIterator = function () {
        return new shoppingCartIterator_js_1.ShoppingCartIterator(this.items);
    };
    ShoppingCart.prototype.getTotalPrice = function () {
        return this.items.reduce(function (total, item) { return total + item.price; }, 0);
    };
    ShoppingCart.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.forEach(function (observer) { return observer.update(_this.items); });
    };
    ShoppingCart.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.notifyObservers();
        }
    };
    ShoppingCart.prototype.removeObserver = function (observer) {
        var index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    };
    ShoppingCart.prototype.undoLastCommand = function () {
        var lastCommand = this.commands.pop();
        if (lastCommand) {
            lastCommand.undo();
        }
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
