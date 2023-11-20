import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import * as products from '../../../assets/products.json';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent {
  selectedCategory: string = '';
  public productList: any;
  public filterCategory: any;
  searchKey: string = '';
  isLoading: boolean = true;
  fliterValue: string = "Default";
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20]

  constructor(private CartService: CartService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.productList = (products as any).default;

    this.filterCategory = this.productList;
    this.productList.forEach((a: any) => {
      Object.assign(a, { quantity: 1, total: a.price });
    });
    this.isLoading = false;
  }

  addToCart(post: any) {
    this.CartService.addToCart(post);
    this.toastr.success(`${post.title} added to cart successfully`, 'Success');
  }

  showToaster(){
    this.toastr.success("Hello, I'm the toastr message.")
}
  filter(category: string) {
    this.selectedCategory = category;
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}
