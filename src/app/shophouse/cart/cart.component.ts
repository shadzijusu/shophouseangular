import { forkJoin, from, map, Observable, switchMap } from 'rxjs';
import { CartProduct } from 'src/app/core/models/CartProduct.model';
import { Product } from 'src/app/core/models/Product.model';
import { CartService } from 'src/app/core/services/CartService.service';
import { ProductService } from 'src/app/core/services/ProductService.service';
import { StorageService } from 'src/app/core/services/StorageService.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit  {
  products : Product[] = []
  cartProducts : CartProduct[] = []
  constructor(
    private router : Router
  ) {

    if(localStorage.getItem("products") != null) {
      this.products = JSON.parse(localStorage.getItem("products") || '[]')
      this.cartProducts = JSON.parse(localStorage.getItem("cartProducts") || '[]')
    }
  }
  
  ngOnInit() : void {
  }
  getQuantity(productId: number){
    let prod = this.cartProducts.find((product) => product.productId == productId)
    return prod?.quantity;
  }
  deleteProduct(productId: number, price : string) {
    let quantity = this.getQuantity(productId) || 0

    var total = JSON.parse(localStorage.getItem("total") ||'0') 
    total = total - (Number(price) * quantity)

    this.products = this.products.filter((product) => product.id != productId)
    this.cartProducts = this.cartProducts.filter((product) => product.productId != productId)

    if(this.products.length === 0) 
    total = 0;

    localStorage.setItem("products", JSON.stringify(this.products));
    localStorage.setItem("cartProducts", JSON.stringify(this.cartProducts));
    localStorage.setItem("total", JSON.stringify(total));
    this.router.navigate(['/cart'])
    .then(() => {
     window.location.reload();
  })
}
  getTotal() {
    return JSON.parse(localStorage.getItem("total") || '0');
  }
}
