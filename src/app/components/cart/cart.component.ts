import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  public product : any=[];
  public grandTotal : number = 0;

  constructor(private cartService : CartService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res => {
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item : any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
}
