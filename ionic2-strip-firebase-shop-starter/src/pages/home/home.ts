import { Component } from '@angular/core';
import { NavController,
    AlertController} from 'ionic-angular';


import { AuthData } from '../../providers/auth-data';
import {GoodsData}from '../../providers/goods-data';

import {Login}from'../login/login';
import {GoodDetail } from '../good-detail/good-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
 
})
export class HomePage {
    public goodList: any;

    
    constructor(public navCtrl: NavController,
        public alertCtrl: AlertController,
        public goodsData:GoodsData,
        public authData: AuthData) {
     
        
            
    }

    goodDetail(good) {
        this.navCtrl.push(GoodDetail, good);
    }

    ionViewWillEnter() {

        this.goodsData.getGoods().on('value', snapshot => {
            let rawList = [];
            snapshot.forEach(snap => {

                rawList.push({
                    key: snap.key,
                    amount: snap.val().amount,
                    name: snap.val().name,
                    price: snap.val().price,
                    img: snap.val().img


                });
                return false
            });

            this.goodList = rawList;
        });

    }

   



  logOut() {
      this.authData.logoutUser().then(() => {
          this.navCtrl.setRoot(Login);
      });
    }

 

}
