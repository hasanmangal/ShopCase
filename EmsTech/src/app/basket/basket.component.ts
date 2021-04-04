import { Component, OnInit } from '@angular/core';

import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shop/product';


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  products: Product[] ;
  path='http://localhost:3000/products'
  constructor(private alertifyService: AlertifyService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get<Product[]>(this.path)
      .subscribe((data) => {
        this.products = data;
      });
      
  }
  addToCard(product: Product) {
    this.alertifyService.success(product.name + ' Sepete Eklendi');
    console.log(product)
    const addedProducts = JSON.parse(localStorage.getItem('addedProducts')  || '[]') as Product[];
    addedProducts.push(product)
    console.log("addedProducts = ",addedProducts)
    localStorage.setItem('addedProducts', JSON.stringify(addedProducts))
    
  }

 
}
