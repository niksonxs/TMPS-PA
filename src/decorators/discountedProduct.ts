import { Product } from "../products/product";
import { ProductDecorator } from "./productDecorator";


export class DiscountedProduct implements ProductDecorator {
  private discountedProduct: Product;
  private discountPercentage: number;

  constructor(product: Product, discountPercentage: number ) {
      this.discountedProduct = product;
      this.discountPercentage = discountPercentage;
    }
 
    getName() {
      return this.discountedProduct.getName();
    }

  getPrice() {
    const totalPrice = this.discountedProduct.getPrice();
    const discountedPrice = totalPrice - totalPrice * ( this.discountPercentage/100);
    
    return discountedPrice;
  }

}