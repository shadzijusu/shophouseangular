import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cart } from '../models/Cart.model';

@Injectable({providedIn: 'root'})
export class CartService {
    constructor(private http: HttpClient) {}
    getCarts(): Observable<Cart[]> {
        return this.http.get<Cart[]>(`https://fakestoreapi.com/carts`);
    }
    getCartById(id: number) : Observable<Cart> {
        return this.http.get<Cart>(`https://fakestoreapi.com/carts/${id}`);
    }
    
}