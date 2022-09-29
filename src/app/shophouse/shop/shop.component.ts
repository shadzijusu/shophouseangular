import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/core/services/ProductService.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
 product$ : Observable<Product[]>
 selectedCategory: any;
 categoryName : string = "";
 categoryButtons = [
  {text: "Women's Clothing", isClicked: false},
  {text: "Men's Clothing", isClicked: false},
  {text: "Electronics", isClicked: false},
  {text: "Jewelery", isClicked: false}
 ]
  constructor(private productService: ProductService, private route:ActivatedRoute) {
    this.product$ = this.productService.getAllProducts()    
    
   }

  ngOnInit(): void {
  }
  
  getProductsByCategory(category: string, button: any ) {
    category = category.toLocaleLowerCase();
    this.product$ = this.productService.getProductsByCategory(category)
    for(let but of this.categoryButtons) {
      but.isClicked = false
    }
    button.isClicked = true;
  }
  onSelectedCategory(category: string) {
    this.selectedCategory = category
  } 
 
    
}
