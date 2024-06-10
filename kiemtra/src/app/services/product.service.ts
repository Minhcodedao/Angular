import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
API_URL = `http://localhost:3000/products`
  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API_URL}`)
  }
  getProductsById(id:number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }
  addProducts(product: IProduct): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(`${this.API_URL}`, product)
  }
  removeProducts(id:number): Observable<IProduct | {}> {
    return this.http.delete<IProduct | {}>(`${this.API_URL}/${id}`)
  }
  updateProducts(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_URL}/${product.id}`, product)
  }
}
