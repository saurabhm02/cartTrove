// // import { Injectable } from '@angular/core';
// // import { BehaviorSubject } from 'rxjs';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class CartService {
// //   public cartItemList : any=[]
// //   public productList = new BehaviorSubject<any>([]);
// //   public search = new BehaviorSubject<string>("");

// //   constructor() { }

// //   getProduct(){
// //     return this.productList.asObservable();
// //   }

// //   setProduct(product : any){
// //     this.cartItemList.push(...product);
// //     this.productList.next(product);
// //   }

// //   addToCart(product: any){
// //     this.cartItemList.push(product);
// //     this.productList.next(this.cartItemList);
// //     this.getTotalPrice();
// //     console.log(this.cartItemList);
// //   }

// //   getTotalPrice() : number{
// //     let grandTotal = 0;
// //     this.cartItemList.map((a:any)=>{
// //       grandTotal += a.total;
// //     })
// //     return grandTotal;
// //   }
// //   removeCartItem(product: any){
// //     this.cartItemList.map((a:any, index:any)=>{
// //       if(product.id === a.id){
// //         this.cartItemList.splice(index,1);
// //       }
// //     })
// //     this.productList.next(this.cartItemList);
// //   }
// //   removeAllCart(){
// //     this.cartItemList = []
// //     this.productList.next(this.cartItemList);
// //   }
// // }

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   public cartItemList : any=[]
//   public productList = new BehaviorSubject<any>([]);
//   public search = new BehaviorSubject<string>("");

//   constructor() { }

//   getProduct(){
//     return this.productList.asObservable();
//   }

//   setProduct(product : any){
//     this.cartItemList.push(...product);
//     this.productList.next(product);
//   }

//   addToCart(product: any){
//     this.cartItemList.push(product);
//     this.productList.next(this.cartItemList);
//     this.getTotalPrice();
//     console.log(this.cartItemList);
//   }

//   getTotalPrice() : number{
//     let grandTotal = 0;
//     this.cartItemList.map((a:any)=>{
//       grandTotal += a.total;
//     })
//     return grandTotal;
//   }
//   removeCartItem(product: any){
//     this.cartItemList.map((a:any, index:any)=>{
//       if(product.id === a.id){
//         this.cartItemList.splice(index,1);
//       }
//     })
//     this.productList.next(this.cartItemList);
//   }
//   removeAllCart(){
//     this.cartItemList = []
//     this.productList.next(this.cartItemList);
//   }
// }


// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   public cartItemList: any = [];
//   public productList = new BehaviorSubject<any>([]);
//   public search = new BehaviorSubject<string>("");

//   constructor() { }

//   getProduct() {
//     return this.productList.asObservable();
//   }

//   setProduct(product: any) {
//     this.cartItemList.push(...product);
//     this.productList.next(this.cartItemList);
//   }

//   addToCart(product: any) {
//     this.cartItemList.push(product);
//     this.productList.next(this.cartItemList);
//     this.getTotalPrice();
//     console.log(this.cartItemList);
//   }

//   getTotalPrice(): number {
//     let grandTotal = 0;
//     this.cartItemList.map((a: any) => {
//       grandTotal += a.total;
//     });
//     return grandTotal;
//   }

//   removeCartItem(product: any) {
//     this.cartItemList.map((a: any, index: any) => {
//       if (product.id === a.id) {
//         this.cartItemList.splice(index, 1);
//       }
//     });
//     this.productList.next(this.cartItemList);
//   }

//   removeAllCart() {
//     this.cartItemList = [];
//     this.productList.next(this.cartItemList);
//   }
// }



import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any[] = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');
  public filteredProductList = new BehaviorSubject<any[]>([]);

  constructor() { }

  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.forEach((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }
  
  updateCart(cartItems: any[]) {
    this.cartItemList = [...cartItems];
  }

  removeCartItem(product: any) {
    const index = this.cartItemList.findIndex((a: any) => product.id === a.id);
    if (index !== -1) {
      this.cartItemList.splice(index, 1);
      this.productList.next(this.cartItemList);
    }
  }

  filterProducts(searchTerm: string) {
    // Implement your filtering logic here
    const filteredItems = this.cartItemList.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Update the filteredProductList BehaviorSubject
    this.filteredProductList.next(filteredItems);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
