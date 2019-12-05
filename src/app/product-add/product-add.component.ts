import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  constructor(
    private productAddService: ProductService
  ) { }

  ngOnInit() {
  }

  addProduct(){
    this.productAddService.addProduct(this.product).subscribe(data => {
      console.log(data);
      
      
    })
  }

}
