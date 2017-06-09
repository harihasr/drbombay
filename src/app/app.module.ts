import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductComponent } from './product/product/product.component';
import { ProductListComponent } from './product/product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product/product-detail/product-detail.component';
import { ProductItemComponent } from './product/product/product-list/product-item/product-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProductService } from './product/product.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { DataStorageService } from './shared/data-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService, ShoppingListService, DataStorageService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
