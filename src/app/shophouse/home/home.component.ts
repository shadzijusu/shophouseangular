import { filter, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from 'src/app/core/models/Product.model';
import { ProductService } from 'src/app/core/services/ProductService.service';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product$: Observable<Product[]>;
  popularProduct$: Observable<Product[]>;
  categoryButtons = [
    {text: "Women's Clothing"},
    {text: "Men's Clothing"},
    {text: "Electronics"},
    {text: "Jewelery"}
   ]
  constructor(private productService: ProductService) {
    this.product$ = this.productService.getAllProducts()
    this.popularProduct$ = this.productService.getAllProducts(3)
   }

  ngOnInit(): void {
  
  }
}
 
