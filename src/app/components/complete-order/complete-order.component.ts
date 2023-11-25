import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-order',
  templateUrl: './complete-order.component.html',
  styleUrls: ['./complete-order.component.scss']
})
export class CompleteOrderComponent {
  public grandTotal : number = 0;
  public product : any=[];
  today: number = Date.now();

  constructor(
    private cartService : CartService,private router: Router

  ) { }

  navigateToStore() {
    this.router.navigate(['/products'])
  }

  
  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res => {
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  updateTotalPrice() {
    let total = 0;
    for (let item of this.product) {
      total += (item.quantity * item.price);
    }
    return total;
  }

}
