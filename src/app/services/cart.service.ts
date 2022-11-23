import { Injectable } from '@angular/core';
import { Cart } from '../Model/CartModel';
import { Products } from '../Model/ProductsModel';
import { User } from '../Model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private Cart :Cart;
  constructor() {  
    this.Cart=new Cart();
  }
  GetCartItems() : Cart
  {
    return this.Cart;
  }
  AddProductToCart(Product : Products)
  {
    if(Product.Amount === 0)
    {
      alert("please choose a valed product number");
    }
    else{
     this.Cart.Products.push(Product);
    alert(`${Product.name} added to your cart`);     
    }

  }
  RegisterUser(User : User){
    this.Cart.user = User;

  }
  RemoveItemFromCart(Product : Products) : number
  {
    let index= this.Cart.Products.indexOf(Product);
    this.Cart.Products.splice(index,1);
    alert(`${Product.name} is deleted from the cart`);
    return this.Cart.CalculateProductsTotalPrice();
  }

}
