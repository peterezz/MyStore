import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/Model/ProductsModel';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {
  Products :Products[]=[];
  ProductsSubscription : Subscription;

  constructor(private ProductService : ProductService , private CartSevice: CartService) {
    this.ProductService.FetchData();
    this.ProductsSubscription=this.ProductService.Products$.subscribe(res=>{
      this.Products=res;
    });
   }
   addToCart(ProductItem : Products)
   {
     this.CartSevice.AddProductToCart(ProductItem);
   }
  ngOnInit(): void {

  }
  ngOnDestroy(): void {
    this.ProductsSubscription.unsubscribe();
  }

}
