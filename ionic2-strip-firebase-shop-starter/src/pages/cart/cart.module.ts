import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Cart } from './cart';

@NgModule({
  declarations: [
    Cart,
  ],
 
  exports: [
    Cart
  ]
})
export class CartModule {}
