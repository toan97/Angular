import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products/product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.route.params.subscribe(param =>{
      const { id } = param;
      this.productService.getProduct(id).subscribe(dataProduct =>{
        console.log(dataProduct);
        
        this.product = dataProduct;
      })
    })
  }

  updateProduct(id){
    this.productService.updateProduct(id,this.product).subscribe(dataProduct => {
      
      
    })
    
  };

}
