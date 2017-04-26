import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {Login} from'../pages/login/login';
import {ResetPassword} from '../pages/reset-password/reset-password';
import {Signup}from '../pages/signup/signup';
import {CheckOut} from '../pages/check-out/check-out';
import {GoodDetail} from '../pages/good-detail/good-detail';
import {Cart} from '../pages/cart/cart';

import {AuthData}from '../providers/auth-data';
import {CartData}from '../providers/cart-data';
import {GoodsData}from'../providers/goods-data';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
      TabsPage,
      Login,
      ResetPassword,
      Signup,
      CheckOut,
      GoodDetail,
      Cart
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
      TabsPage,
      Login,
      ResetPassword,
      Signup,
      CheckOut,
      GoodDetail,
      Cart
  ],
  providers: [
      GoodsData,
      CartData,
      AuthData,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
