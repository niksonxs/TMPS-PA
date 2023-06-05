"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemCommand = void 0;
var AddItemCommand = /** @class */ (function () {
    function AddItemCommand(shoppingCart, item) {
        this.shoppingCart = shoppingCart;
        this.item = item;
    }
    AddItemCommand.prototype.execute = function () {
        this.shoppingCart.addItem(this.item);
    };
    AddItemCommand.prototype.undo = function () {
        this.shoppingCart.removeItem(this.item);
    };
    return AddItemCommand;
}());
exports.AddItemCommand = AddItemCommand;
