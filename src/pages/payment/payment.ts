import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaidPage } from '../paid/paid';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToPaid(){
    console.log("Navigating..");

    this.navCtrl.push(PaidPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
