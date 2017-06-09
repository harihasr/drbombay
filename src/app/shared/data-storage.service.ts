import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class DataStorageService{

    constructor(private http: Http, private slService: ShoppingListService){

    }

    storeCart(){
        return this.http.put('https://drbombay-attemptone.firebaseio.com/cart.json', this.slService.getProducts());
    }

}