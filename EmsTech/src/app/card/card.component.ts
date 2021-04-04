import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { Card } from './card';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})




export class CardComponent implements OnInit {
  account:Card={}
  path='http://localhost:3000/cards'
  constructor(private alertifyService: AlertifyService,
    private http: HttpClient,private router: Router) { }



  
    ngOnInit(): void {
      this.account = JSON.parse(localStorage.getItem('account')  || '{}') as Card;
        
    }
  add(form:NgForm){
    
const storageAccount = JSON.parse(localStorage.getItem('account')  || '{}') as Card;
if(storageAccount.balance){
  storageAccount.balance = Number(this.account.balance) + Number(storageAccount.balance) ;
localStorage.setItem('account', JSON.stringify(storageAccount))

}
else{
  localStorage.setItem('account', JSON.stringify(this.account))
}    
     this.router.navigate(["/basket"])
  
  }

}





