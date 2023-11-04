import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  public productList : any;
  constructor(private api : ApiService, private CartService : CartService) { }
  
  ngOnInit() :void{
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a:any) => {
        Object.assign(a, {quantity:1, total:a.price});
      });
    })
  }

  addToCart(post: any){
    this.CartService.addToCart(post);
  }
}
