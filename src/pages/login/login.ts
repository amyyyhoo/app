import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToProfile(){
    console.log("Navigating...");

    this.navCtrl.push(ProfilePage)

  }

}
