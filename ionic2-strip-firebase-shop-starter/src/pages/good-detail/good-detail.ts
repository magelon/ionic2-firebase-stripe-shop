import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {GoodsData}from '../../providers/goods-data';

import {Cart}from'../cart/cart';
/**
 * Generated class for the GoodDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-good-detail',
  templateUrl: 'good-detail.html',
})
export class GoodDetail {

    good: any;

    constructor(private goodD: GoodsData,public navCtrl: NavController, public navParams: NavParams) {

        this.good = this.navParams.data;
  }

    check(key, name) {
        this.goodD.addToCart(key, name);
    }

    goToCart() {
        this.navCtrl.push(Cart);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GoodDetail');
  }

}
