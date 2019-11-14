import { Component, OnInit } from '@angular/core';
import { data } from './data';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = data;
  constructor(
    ) { }
    
    ngOnInit() {
      
    }
}
