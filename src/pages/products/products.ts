import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/products';
import { ProductPage } from '../product/product';
import { ProductService } from '../../product.services/product.services';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  public products: Array<Product>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public productService: ProductService)
    {
    this.products = [];

    this.products = productService.getAllProducts();
    }

    navigateToProduct(product: Product){
      this.navCtrl.push(ProductPage,{
        productParameter: product
      });

    }
  }
  