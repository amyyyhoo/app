import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/products';
import { ProductService } from '../../../src/product.services/product.services';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  public product: Product = new Product();

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.product = this.navParams.get("productParameter");

  }

  navigateToPayment(){
    console.log("Navigating..");

    this.navCtrl.push(PaymentPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
