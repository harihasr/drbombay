import { ProductToCart } from '../shared/product-to-cart.model'
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
    productsChanged = new EventEmitter<ProductToCart[]>();

    private products: ProductToCart[] = [];

  getProducts(){
      return this.products.slice();
  }

  addProduct(product: ProductToCart){
    
      this.products.push(product);
      console.log("ShoppingService" + product.name);
      console.log(product.quantity);
      this.productsChanged.emit(this.products.slice());
  }
}