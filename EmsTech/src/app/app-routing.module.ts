import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { CardComponent } from './card/card.component';
import { ShopComponent } from './shop/shop.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {path:'',redirectTo:'wallet',pathMatch:'full'},
  {path:'wallet',component:WalletComponent},
  {path:'card',component:CardComponent},
  {path:'shop',component:ShopComponent},
  {path:'basket' ,component:BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
