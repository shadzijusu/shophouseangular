import { Observable } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AccountService {
    constructor(private http: HttpClient) { }

    getAuthToken(username: string, password: string) : Observable<any>{
        let params = new HttpParams();
          params =  params.append('username', username);
          params = params.append('password', password)
        return this.http.post(`https://fakestoreapi.com/auth/login`, {params})

    }
    
}