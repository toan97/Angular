import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from './product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(
      private productService: ProductService
    ) { }
    
    ngOnInit() {
     this.getProduct ()
    }
    getProduct(){
      this.productService.getProducts().subscribe(dataProduct=>{
        this.products = dataProduct; 
      })
    }
    deleteProduct(id){
      this.productService.deleteProduct(id).subscribe(dataProduct=>{
        this.products = this.products.filter(product => product.id != dataProduct.id);
      })
    }
}
