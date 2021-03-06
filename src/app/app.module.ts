import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { ProfilePage } from '../pages/profile/profile';
import { ProductsPage } from '../pages/products/products';
import { ProductPage } from '../pages/product/product';
import { ProductService } from '../product.services/product.services';
import { PaymentPage } from '../pages/payment/payment';
import { PaidPage } from '../pages/paid/paid';
import { TransactionhistoryPage } from '../pages/transactionhistory/transactionhistory';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    ProductsPage,
    ProductPage,
    PaymentPage,
    PaidPage,
    TransactionhistoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrationPage,
    ProfilePage,
    ProductsPage,
    ProductPage,
    PaymentPage,
    PaidPage,
    TransactionhistoryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
