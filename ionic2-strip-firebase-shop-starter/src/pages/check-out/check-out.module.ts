import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CheckOut } from './check-out';

@NgModule({
  declarations: [
    CheckOut,
  ],
 
  exports: [
    CheckOut
  ]
})
export class CheckOutModule {}
