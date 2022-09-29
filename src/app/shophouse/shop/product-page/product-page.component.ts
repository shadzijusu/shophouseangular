import { from, map, Observable, tap } from 'rxjs';
import { CartProduct } from 'src/app/core/models/CartProduct.model';
import { Product } from 'src/app/core/models/Product.model';
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
  clicked = false
  constructor(private productService : ProductService, private route: ActivatedRoute, private router: Router) {
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
addToCart(productId : number, quantity : number) {
  this.clicked = true
  this.product$.subscribe(
    product => { 
      var total = JSON.parse(localStorage.getItem("total") ||'0') 
      total =  quantity  * Number(product.price) + total
      localStorage.setItem("total", JSON.stringify(total));

      //setting product id and quantity
      let found = false
      var existingCartProducts = JSON.parse(localStorage.getItem("cartProducts") || '[]') as CartProduct[];
      for(let i = 0; i < existingCartProducts.length; i++) {
        if(existingCartProducts[i].productId == product.id) {
          existingCartProducts[i].quantity += quantity;
          found = true
        }
      }
      if(found === false) {
        var existingProducts = JSON.parse(localStorage.getItem("products") || '[]') as Product[];
        console.log(existingProducts)
        existingProducts.push(product)
        localStorage.setItem("products", JSON.stringify(existingProducts));
      existingCartProducts.push({
        productId: product.id,
        quantity: quantity
      })
    }
      localStorage.setItem("cartProducts", JSON.stringify(existingCartProducts));


      this.router.navigate(['/cart'])
     .then(() => {
      window.location.reload();
  });
    })


}
}
