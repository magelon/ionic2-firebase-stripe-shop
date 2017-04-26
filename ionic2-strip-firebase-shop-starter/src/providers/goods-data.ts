import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the GoodsData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GoodsData {
    public goodsList: firebase.database.Reference; 
    public orderList: firebase.database.Reference;
    public cartList: firebase.database.Reference;

    constructor() {
        this.goodsList = firebase.database().ref('goods');
        this.orderList = firebase.database().ref('orderList');
        this.cartList = firebase.database().ref('cartList');
    console.log('Hello GoodsData Provider');
    }

    //get goods
    getGoods(): firebase.database.Reference {
        return this.goodsList;
    }
    //get goods from cart
    getCart(): firebase.database.Reference {
        return this.cartList;
    }
    //find good by id
    findGoodById(goodId): firebase.database.Reference {
        return this.goodsList.child(goodId);
    }

    //add to order
    order(key, name): firebase.Promise<any> {
        return this.orderList.push({
            key: key,
            name: name
        });
    }

    //add to cart
    addToCart(key,name): firebase.Promise<any> {
        return this.cartList.push(
            {
                key: key,
                name:name
            }
        );
    }

    getGoodPic(good): firebase.database.Reference {
        return this.goodsList.child(good).child('pictures');
    }

}
