import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected api = 'http://5dee4f64b3d17b00146a2666.mockapi.io/products';
  constructor(
    private http: HttpClient
  ) { }
  getProducts():Observable<Product[]>{
    console.log(this.http.get(this.api));
    return this.http.get<Product[]>(this.api);
  }
  addProduct(product):Observable<Product>{
    return this.http.post<Product>(this.api,product);
  }
  getProduct(id):Observable<Product>{
    return this.http.get<Product>(this.api+'/'+id);
  }
  updateProduct(id,product): Observable<Product>{
    return this.http.put<Product>(this.api+'/'+id, product);
  }
  deleteProduct(id): Observable<Product>{
    return this.http.delete<Product>(this.api+'/'+id);
  }
}
