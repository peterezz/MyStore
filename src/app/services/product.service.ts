import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Products } from '../Model/ProductsModel';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private Products: Products[] = [];
  Products$ = new BehaviorSubject<Products[]>(this.Products);
  constructor(private http: HttpClient, private cartservice: CartService) {}
  FetchData() {
    const subscription = this.http
      .get<Products[]>('/assets/data.json')
      .subscribe((res) => {
        let carProducts = this.cartservice.GetCartItems().Products;
        if (carProducts.length === 0) {
          res.forEach((element) => {
            element.Amount = 0;
          });
        }
        res.forEach((product) => {

            for(let cartProduct of carProducts) {
              if (cartProduct.id === product.id) {
                product.Amount = cartProduct.Amount;
                break;
              } else {
                product.Amount = 0;
              }
            };
          
        });
        this.Products = res;
        this.Products$.next(this.Products);
        subscription.unsubscribe;
      });
  }
}
