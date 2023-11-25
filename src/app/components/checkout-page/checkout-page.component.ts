

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-checkout-page',
    templateUrl: './checkout-page.component.html',
    styleUrls: ['./checkout-page.component.scss']
  })
export class CheckoutPageComponent implements OnInit {
  checkoutForm: FormGroup = new FormGroup({});
  isSubmitted = false;
  public grandTotal : number = 0;
  public product : any=[];


  constructor(private formBuilder: FormBuilder, private cartService : CartService,private router: Router) { }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      house: ['', Validators.required],
      postalcode: ['', Validators.required],
      zip: ['', Validators.required]
    });

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
    

  onSubmit() {
    this.isSubmitted = true;

    
    if (this.checkoutForm.valid) {
      
      console.log('Form submitted:', this.checkoutForm.value);
    }
  }
}

