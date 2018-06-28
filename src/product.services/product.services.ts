//useful for sharing info

import { Product } from "../models/products";
import { Injectable } from "@angular/core";
import { Img } from "ionic-angular/umd";

@Injectable()
export class ProductService {

    private products: Array<Product>;

    constructor() {

        this.products = [];
    }

    getAllProducts() {

        var product1 = new Product();
        product1.id = 1
        product1.name = "Fishing";
        product1.description = "Go fishing with a local";
        product1.price = "$" + 500;
        product1.imageUrl = "img src = assets/imgs/fishing.jpg";

        var product2 = new Product();
        product2.id = 2
        product2.name = "Cooking";
        product2.description = "Great pasta with a local italian chef";
        product2.price = "$" + 500;
        product2.imageUrl = "img src = assets/imgs/cooking.jpg";

        this.products.push(product1);
        this.products.push(product2);
    
        return this.products;

    }
}
