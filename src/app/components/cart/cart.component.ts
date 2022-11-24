import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from 'src/app/Model/ProductsModel';
import { User } from 'src/app/Model/UserModel';
import { Cart } from '../../Model/CartModel';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  myform = new FormGroup({
    Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    Address: new FormControl('', [Validators.required, Validators.minLength(3)]),
    CridtCardNumber: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[0-9]*$')])

  });
  user :User;
 Cart : Cart=new Cart();
 TotalAmmount : number=0;

  constructor(private CartService : CartService, private router:Router) { 
    this.user = new User();
  }

  ngOnInit(): void {
    this.Cart = this.CartService.GetCartItems();
    this.TotalAmmount=this. Cart.CalculateProductsTotalPrice();
  }
  CalcTotalPrice()
  {
    this.TotalAmmount=this. Cart.CalculateProductsTotalPrice();
  }
  SubmitForm(){
    if(this.myform.invalid) return;
    else{
      this.user={UserName:this.myform.controls.Name.value!,
      UserAddress:this.myform.controls.Address.value!,
      UserCridetCard:this.myform.controls.CridtCardNumber.value!}
    this.CartService.RegisterUser(this.user);
    this.router.navigate(['success'])    
    }


  }
  RemoveItemFromCart(item : Products){
    this.TotalAmmount = this.CartService.RemoveItemFromCart(item);
  }
}
