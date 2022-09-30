import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AccountService {
    constructor(private http: HttpClient) {}

    getAuthToken(username: string, password: string) : Observable<any>{
        return this.http.post(`https://fakestoreapi.com/auth/login`, {username, password})
    }
    
}