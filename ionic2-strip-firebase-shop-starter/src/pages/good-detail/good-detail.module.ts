import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { GoodDetail } from './good-detail';

@NgModule({
  declarations: [
    GoodDetail,
  ],
  exports: [
    GoodDetail
  ]
})
export class GoodDetailModule {}
