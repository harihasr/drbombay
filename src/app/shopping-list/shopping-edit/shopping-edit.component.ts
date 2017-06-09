import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { ProductToCart } from '../../shared/product-to-cart.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() productAdded = new EventEmitter<ProductToCart>();
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {

  }

  onAddItem(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newProduct = new ProductToCart(name, amount);
    this.slService.addProduct(newProduct);
    this.productAdded.emit(newProduct);
  }

}
