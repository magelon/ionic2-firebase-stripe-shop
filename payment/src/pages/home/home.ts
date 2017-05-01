import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

    constructor(public navCtrl: NavController
        , public http: Http
    ) {

    }

    charge() {
        let token: any = "tok_1AEWdlI6UHL0Mvw5F9nQlvat";
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log("charging use" + token);
        

        let body = {
            token: token
        };
        //console.log(JSON.stringify(body.token));

        this.http.post('http://localhost:3000/charge',
            JSON.stringify(body), { headers: headers })
           
            .subscribe(data => {
                console.log(data);
            });


    }

}
