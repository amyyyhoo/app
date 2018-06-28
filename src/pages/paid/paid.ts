import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TransactionhistoryPage } from '../transactionhistory/transactionhistory';

@Component({
  selector: 'page-paid',
  templateUrl: 'paid.html',
})
export class PaidPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToTransactionHistory(){
    console.log("Navigating..");

    this.navCtrl.push(TransactionhistoryPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaidPage');
  }

}
