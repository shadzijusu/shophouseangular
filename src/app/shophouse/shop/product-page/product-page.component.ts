import { map, Observable, tap } from 'rxjs';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/core/services/ProductService.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product$ : Observable<Product>;
  productId : string;
  quantity : number = 1.0
  constructor(private productService : ProductService, private route: ActivatedRoute) {
    this.productId = this.route.snapshot.params['id']
    this.product$ = this.productService.getProductById(Number(this.productId));

   }

  ngOnInit(): void {
  }
  increaseQuantity() {
    this.quantity += 1;

  }
decreaseQuantity() {
  if(this.quantity > 1)
  this.quantity -= 1;

}
addToCart() {
  
}
}
