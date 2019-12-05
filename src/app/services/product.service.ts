import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../products/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected api = 'http://5dd23a8e15bbc2001448d785.mockapi.io/Products';
  constructor(
    private http: HttpClient
  ) { }
  getProducts():Observable<Product[]>{
    console.log(this.http.get(this.api))
    return this.http.get<Product[]>(this.api);
  }
  addProduct(product):Observable<Product>{
    return this.http.post<Product>(this.api,product);
  }
  getProduct(id):Observable<Product>{
    return this.http.get<Product>(this.api+'/'+id);
  }
  updateProduct(id,product){
    return this.http.put<Product>(this.api+'/'+id, product);
  }
  deleteProduct(id): Observable<Product>{
    return this.http.delete<Product>(this.api+'/'+id);
  }
}
