import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {CheckOut}from'../check-out/check-out';

import {CartData}from '../../providers/cart-data';
/**
 * Generated class for the Cart page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class Cart {

    cartList: any;

  constructor(public cartData:CartData,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cart');
  }

  ionViewWillEnter() {

      this.cartData.getCart().on('value', snapshot => {
          let rawList = [];
          snapshot.forEach(snap => {

              rawList.push({
                  key: snap.key,
                  class: snap.val().key,
                  name: snap.val().name,



              });
              return false
          });

          this.cartList = rawList;
      });

  }

  checkOut() {
      this.navCtrl.push(CheckOut);
  }


}
