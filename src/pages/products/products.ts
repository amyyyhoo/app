import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CookingPage } from '../cooking/cooking';
import { SwimmingPage } from '../swimming/swimming';
import { FishingPage } from '../fishing/fishing';
import { SingingPage } from '../singing/singing';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToCooking(){
    console.log("Navigating...");

    this.navCtrl.push(CookingPage)

  }

  navigateToSwimming(){
    console.log("Navigating...");

    this.navCtrl.push(SwimmingPage)

  }

  navigateToFishing(){
    console.log("Navigating...");

    this.navCtrl.push(FishingPage)

  }

  navigateToSinging(){
    console.log("Navigating...");

    this.navCtrl.push(SingingPage)

  }
}
