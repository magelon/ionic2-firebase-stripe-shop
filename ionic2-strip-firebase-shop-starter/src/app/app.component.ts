import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {HomePage} from '../pages/home/home';
import {Login} from '../pages/login/login';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

      // Initialize Firebase
      var config = {
          apiKey: "AIzaSyBL8RiRjGsIRTHubRzR85hlRkM22-wyUB4",
          authDomain: "shop-d7e2e.firebaseapp.com",
          databaseURL: "https://shop-d7e2e.firebaseio.com",
          projectId: "shop-d7e2e",
          storageBucket: "shop-d7e2e.appspot.com",
          messagingSenderId: "287848933518"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged((user) => {

          if (!user) {
              console.log("not login");
              this.rootPage = Login;


          } else {
              console.log("login");
              this.rootPage = HomePage;

          }

      });

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
