import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { Card } from '../card/card';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  
  account: Card;
  products:Product[];
  constructor(
    private alertifyService: AlertifyService,
    private http: HttpClient
  ) {}

  

  ngOnInit(): void {
    this.account = JSON.parse(localStorage.getItem('account')  || '{}') as Card;
    console.log("account = ",this.account)
    this.products = JSON.parse(localStorage.getItem('addedProducts')  || '[]') as Product[];

  }

  showTotalPrice():number{
    return this.products.reduce((sum, current) => sum + Number(current.price) , 0);

  }
  save():void{
  this.alertifyService.alert("Siparişiniz İşleme Alınmıştır")
  }
 
}
