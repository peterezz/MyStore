import { Component, OnInit } from '@angular/core';
import { Cart } from '../../Model/CartModel';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  cart: Cart;
  constructor(private CartService: CartService) {
    this.cart=this.CartService.GetCartItems();
   }

  ngOnInit(): void {
    
  }

}
