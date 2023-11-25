import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { CartComponent } from './components/cart/cart.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { CompleteOrderComponent } from './components/complete-order/complete-order.component';

const routes: Routes = [
  {path:'', component: LandingpageComponent },
  {path:'products', component:DataComponent},
  {path: 'cart', component:CartComponent},
  {path: 'checkout', component:CheckoutPageComponent},
  {path: 'orderSuccess', component:CompleteOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
