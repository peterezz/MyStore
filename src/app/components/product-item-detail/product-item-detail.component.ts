import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Products } from 'src/app/Model/ProductsModel';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit , OnDestroy{
  RouterSubscription:Subscription;
  ProductSubscription: Subscription;
  ProductId:number = 0;
  Product :Products;
  disabled: boolean=false;
  constructor(private ActiveRoute : ActivatedRoute, private Router : Router,private ProductService : ProductService, private CartService:CartService) {
    this.Product = new Products();
    this.RouterSubscription=this.ActiveRoute.params.subscribe(params=>{
      this.ProductId = +params['id'];
    });
    this.ProductService.FetchData();
    this.ProductSubscription=this.ProductService.Products$.subscribe(res=>{
      if (this.ProductId === undefined) return;

      const FoundProduct = res.find(product => product.id === this.ProductId);
      if (!FoundProduct) {
        this.Router.navigate(['/']);
        return;
      }

      this.Product = FoundProduct;
    });
   }
   AddToCart()
   {
    this.CartService.AddProductToCart(this.Product);
    this.DisableButton();
   }
  ngOnInit(): void {
    this.DisableButton();
  }
  ngOnDestroy(): void {
    
  this.ProductSubscription.unsubscribe();
  this.RouterSubscription.unsubscribe();
  }
  DisableButton(){
    let ProductFound=this.CartService.GetCartItems().Products.find(p=>p.id===this.Product.id);
    if(ProductFound !== undefined)
    {
      this.disabled=true;
    }
  }
}
