import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { AuthData } from '../../providers/auth-data';
import { Stripe } from '@ionic-native/stripe';



/**
 * Generated class for the CheckOut page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-check-out',
  templateUrl: 'check-out.html',
  providers: [Stripe]
})
export class CheckOut {

    token: any;
    loading: any;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
         private stripe1: Stripe,
         public authData: AuthData,
         public loadingCtrl: LoadingController
    ) {

        this.getToken();

  }

    getToken() {
        this.stripe1.setPublishableKey('pk_test_KFuKDO7ayBQ3tw9nsQAYGls5');

        let card = {
            number: '4242424242424242',
            expMonth: 12,
            expYear: 2020,
            cvc: '220'
        };

        this.stripe1.createCardToken(card)
            .then(token => {
                this.token = token
                    ;
                this.loading.dismiss().then(() => {

                });
            }
        )
            .catch(error => console.error(error));
            this.loading = this.loadingCtrl.create();
            this.loading.present();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckOut');
  }

}
