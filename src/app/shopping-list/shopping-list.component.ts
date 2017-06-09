import { Component, OnInit } from '@angular/core';
import { ProductToCart } from '../shared/product-to-cart.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  products: ProductToCart[] = [];

  constructor(private slService: ShoppingListService) { }

  onProductAdded(product: ProductToCart){
    this.products.push(product);
  }

  ngOnInit() {
    this.products = this.slService.getProducts();
    this.slService.productsChanged.subscribe(
      (products: ProductToCart[]) => {
        this.products = products;

      }
    );
  }

}
