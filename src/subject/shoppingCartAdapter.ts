import { Product } from "../products/product";
import { ProductFactory } from "../products/productFactory";

export class ShoppingCartAdapter {
  adapt(product: Product) {
    return {
      name: product.getName(),
      price: product.getPrice(),
    };
  }

  revert(adaptedProduct: any) {
    return ProductFactory.createProduct(
      adaptedProduct.type,
      adaptedProduct.name,
      adaptedProduct.price,
    );
  }

  
}
