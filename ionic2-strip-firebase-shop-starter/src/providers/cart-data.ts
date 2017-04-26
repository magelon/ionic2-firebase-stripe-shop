import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the CartData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CartData {
    public cartList: firebase.database.Reference;
    constructor() {
        this.cartList = firebase.database().ref('cartList');
    console.log('Hello CartData Provider');
  }
    //get goods from cart
    getCart(): firebase.database.Reference {
        return this.cartList;
    }
}
