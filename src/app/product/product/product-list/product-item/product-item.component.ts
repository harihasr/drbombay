import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../shared/product.model'
import { ProductService } from '../../../product.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  onSelected(){
    this.productService.productSelected.emit(this.product);
  }
}
