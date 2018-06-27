import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProductsPage } from '../products/products';



@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  navigateToProducts(){
    console.log("Navigating...");

    this.navCtrl.push(ProductsPage)

  }

  navigateToLogout(){
    console.log("Navigating...");

    this.navCtrl.push(HomePage)

  }

}
