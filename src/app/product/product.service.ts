import { Product } from '../shared/product.model';
import { EventEmitter } from '@angular/core';

export class ProductService{
    productSelected = new EventEmitter<Product>();


    private products: Product[] = [
    new Product('TestName',
     '0001',
     'Test short description',
     'test long description abcdefghijklmnopqrstuvwxyz',
     50,
     'http://www.tsn.ca/polopoly_fs/1.769616!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/real-madrid.jpg'),
    new Product('TestName 2',
     '0002',
     'Another Test short description',
     'Another test long description abcdefghijklmnopqrstuvwxyz',
     150,
     'http://www.tsn.ca/polopoly_fs/1.769616!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/real-madrid.jpg'),
  ];

  getProducts(){
      return this.products.slice();
  }
}