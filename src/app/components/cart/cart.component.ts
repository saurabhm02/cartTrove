import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  public product : any=[];
  public grandTotal : number = 0;
  private cart: any[] = [];

  constructor(private cartService : CartService, private _toast: HotToastService) {}

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res => {
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item : any){
    this.cartService.removeCartItem(item);
    this._toast.error(`${item.title} removed from Cart`,
        {
          position: 'top-left'
        });
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }
  updateTotalPrice() {
    let total = 0;
    for (let item of this.product) {
      total += (item.quantity * item.price);
    }
    return total;
  }

  incrementQuantity(item: any) {
    item.quantity++;
    this.cartService.updateCart(this.product);
    this.grandTotal = this.updateTotalPrice();
  }

  getCurrentDate(): Date {
    return new Date();
  }
  getFutureDate(days: number): Date {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    return currentDate;
  }
  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.updateCart(this.product);
      this.grandTotal = this.updateTotalPrice();
    }
  }
}
