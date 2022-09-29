import { Observable } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../models/Product.model';

@Injectable({providedIn: 'root'})
export class ProductService {
    constructor(private http: HttpClient) { }
    
    getAllProducts(limit?: number) : Observable<Product[]>{
        let params = new HttpParams();
        if (limit) {
          params =  params.append('limit', limit);
        }
        return this.http.get<Product[]>(`https://fakestoreapi.com/products`, { params });
    }

    getProductsByCategory(category: string): Observable<Product[]> {
        return this.http.get<Product[]>(`https://fakestoreapi.com/products/category/${category}`)
    }
    getProductById(id: number) : Observable<Product>{
        return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
    }
   
}