import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  selectedCategory: string = '';
  public productList : any;
  public filterCategory : any;
  searchKey : string = "";
  constructor(private api : ApiService, private CartService : CartService) { }
  
  ngOnInit() :void{
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category === "men's clothing" || a.category === "women's clothing"){
          a.category = "fashion"
        }
        Object.assign(a, {quantity:1, total:a.price});
      });
    });
    this.CartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addToCart(post: any){
    this.CartService.addToCart(post);
  }

  filter(category : string){
    this.selectedCategory = category;
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category == ''){
        return a;
      }
  })
}
}
