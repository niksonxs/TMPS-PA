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
exports.Electronics = void 0;
var product_js_1 = require("./product.js");
var Electronics = /** @class */ (function (_super) {
    __extends(Electronics, _super);
    function Electronics(name, price) {
        var _this = _super.call(this, name, price) || this;
        _this.type = "electronics";
        return _this;
    }
    return Electronics;
}(product_js_1.Product));
exports.Electronics = Electronics;
