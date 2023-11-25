import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import * as products from '../../../assets/products.json';
import { HotToastService } from '@ngneat/hot-toast';

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

  constructor(private CartService: CartService, private _toast: HotToastService) {}

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
    this._toast.success(`${post.title} added to cart successfully`,
      {
        position: 'top-left'
      });
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
