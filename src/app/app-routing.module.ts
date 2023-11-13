import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { CartComponent } from './components/cart/cart.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

const routes: Routes = [
  {path:'', component: LandingpageComponent },
  {path:'products', component:DataComponent},
  {path: 'cart', component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
