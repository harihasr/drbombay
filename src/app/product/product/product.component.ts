import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  selectedProduct: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.productSelected.subscribe(
      (product: Product) => {
        this.selectedProduct = product;
      }
    );
  }

}
