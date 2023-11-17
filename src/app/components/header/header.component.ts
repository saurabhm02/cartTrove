// import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/service/cart.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {

//   public totalItem : number = 0;
//   public searchTerm !: string;
//   constructor(private cartService : CartService) { }
  
//   ngOnInit(): void {
//     this.cartService.getProduct()
//     .subscribe(res=>{
//       this.totalItem = res.length;
//     })
//   }

//   search(event:any){
//     this.searchTerm = (event.target as HTMLInputElement).value;
//     console.log(this.searchTerm);
//     this.cartService.search.next(this.searchTerm);
//     console.log(this.cartService.search.next(this.searchTerm));
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/service/cart.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {

//   public totalItem: number = 0;
//   public searchTerm!: string;

//   constructor(private cartService: CartService) { }
  
//   ngOnInit(): void {
//     this.cartService.getProduct().subscribe(res => {
//       this.totalItem = res.length;
//     });
//   }

//   search(event: any) {
//     this.searchTerm = (event.target as HTMLInputElement).value;
//     console.log(this.searchTerm);
//     this.cartService.search.next(this.searchTerm);
//   }
// }


// header.component.ts

// import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/service/cart.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss'],
// })
// export class HeaderComponent implements OnInit {
//   public totalItem: number = 0;
//   public searchTerm!: string;

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {
//     // Subscribe to changes in the productList observable
//     this.cartService.getProduct().subscribe((res) => {
//       // Update totalItem based on the length of the received array
//       this.totalItem = res.length;
//     });
//   }

//   search(event: any) {
//     this.searchTerm = (event.target as HTMLInputElement).value;
//     console.log('Search Term:', this.searchTerm);
//     this.cartService.search.next(this.searchTerm);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem: number = 0;
  public searchTerm: string = '';
  public filteredItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe(res => {
        this.totalItem = res.length;
      });

      this.cartService.filteredProductList.subscribe(filteredItems => {
        this.filteredItems = filteredItems;
      });
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log('Search Term:', this.searchTerm);
    this.cartService.search.next(this.searchTerm);
    this.cartService.filterProducts(this.searchTerm);
  }
}
