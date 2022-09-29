import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AccountService {
    constructor(private http: HttpClient) {}

    getAuthToken(username: string, password: string) : Observable<any>{
        let params = new HttpParams().append('username', username).append('password', password);
        let headers = new HttpHeaders().append('Access-Control-Allow-Origin', '*')
        console.log(params)
        console.log(headers)
        return this.http.post(`https://fakestoreapi.com/auth/login`, {params, headers})

    }
    
}