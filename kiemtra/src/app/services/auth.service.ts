import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
API_URL = `http://localhost:3000`
  constructor(private http: HttpClient) { }
  signup(user: {email:string, password:string, confirmPassword:string}): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/signup`, user)
  }
  signin(user: {email:string, password:string}): Observable<any>{
    return this.http.post<any>(`${this.API_URL}/signin`, user)
  }
}
