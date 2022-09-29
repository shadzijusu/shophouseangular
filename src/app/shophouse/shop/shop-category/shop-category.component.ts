import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/core/services/ProductService.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.css']
})
export class ShopCategoryComponent implements OnInit {
  selectedCategory: any;
  categoryName : string;
  product$ : Observable<Product[]>
  categoryButtons = [
   {text: "Women's Clothing", isClicked: false},
   {text: "Men's Clothing", isClicked: false},
   {text: "Electronics", isClicked: false},
   {text: "Jewelery", isClicked: false}
  ]
  constructor(private productService : ProductService, private route:ActivatedRoute) {
    this.categoryName = this.route.snapshot.params['name'].toLocaleLowerCase();
    this.product$ = this.productService.getProductsByCategory(this.categoryName)
    for(let button of this.categoryButtons) {
      if(this.categoryName === "women's clothing" && button.text === "Women's Clothing") {
        button.isClicked = true
      }
       if(this.categoryName === "men's clothing" && button.text === "Men's Clothing") {
        button.isClicked = true
      }
       if(this.categoryName === "electronics" && button.text === "Electronics") {
        button.isClicked = true
      }
       if(this.categoryName === "jewelery" && button.text === "Jewelery")
    {
      button.isClicked = true
    }
    }
   }

  ngOnInit(): void {
  }
  
  onSelectedCategory(category: string) {
    this.selectedCategory = category
  } 
  getProductsByCategory(category: string, button: any ) {
    category = category.toLocaleLowerCase();
    window.history.replaceState({}, '', `/shop/${category}`);
    

    this.product$ = this.productService.getProductsByCategory(category)
    for(let but of this.categoryButtons) {
      but.isClicked = false
    }
    button.isClicked = true;
  }
}
