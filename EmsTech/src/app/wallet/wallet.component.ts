import { Component, OnInit } from '@angular/core';
import { Card } from '../card/card';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private http: HttpClient
  ) {}

  path = 'http://localhost:3000/cards';
  card: Card;

  ngOnInit() {
    this.card = JSON.parse(localStorage.getItem('account')  || '{}') as Card;

  }
  addToMoney() {
    this.alertifyService.success('Para Aktar');
  }

  firstAddToMoney() {
    this.alertifyService.error('Hesabınıza Önce Para Yükleyiniz');
  }

  goToShop() {
    this.alertifyService.warning('Alışveriş sayfasına yönlendiriliyorsunuz');
  }
}
