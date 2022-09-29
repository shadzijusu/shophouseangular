import { map, Observable } from 'rxjs';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/core/services/ProductService.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product$ : Observable<Product[]>
  userId : number = 1
  constructor(private productService : ProductService) { 
  this.product$ = productService.getCartProductsForUser(this.userId);
  }

  ngOnInit(): void {
  }

}
