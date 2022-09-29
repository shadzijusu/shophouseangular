import { forkJoin, map, Observable, ObservableInput, switchMap } from 'rxjs';
import { Product } from 'src/app/core/models/Product.model';
import { CartService } from 'src/app/core/services/CartService.service';
import { ProductService } from 'src/app/core/services/ProductService.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  product$: Observable<Product[]>;
  cartId : number = 2;
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.product$ = this.cartService.getCartById(this.cartId).pipe(
      map((cart) => cart.products),
      switchMap((products) => {
        let results : Observable<Product>[] = []
        products.forEach((product) => {
          results.push(this.getProduct$(product.productId));
        });
        return forkJoin(results);
      })
    ); 
  }
  getProduct$(productId: number): Observable<Product> {
    return this.productService.getProductById(productId);
  }

 

}
