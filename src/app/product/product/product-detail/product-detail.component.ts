import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../../../shared/product.model';
import { ShoppingListService } from '../../../shopping-list/shopping-list.service';
import { ProductToCart } from '../../../shared/product-to-cart.model';
import { DataStorageService } from '../../../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  constructor(private slService: ShoppingListService, private dsService: DataStorageService) { }

  ngOnInit() {
  }
  
  addToCart(productname: string){
    const productName = productname;
    const productQuantity = this.amountInputRef.nativeElement.value;
    const newProductToCart = new ProductToCart(productName, productQuantity);
    this.slService.addProduct(newProductToCart);
    console.log("In Product Detail" + productName);
    console.log(productQuantity);

  }

  saveData(){
    this.dsService.storeCart().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

}
