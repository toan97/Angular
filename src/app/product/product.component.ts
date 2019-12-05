import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products/product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input('dataProduct') product: Product;
  constructor(
    private productService: ProductService

  ) { }

  ngOnInit() {
  }

  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe(dataProduct => {
      this.product = dataProduct;
      
    })
  };

}
