import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/Model/ProductsModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() ProductItem:Products;
disabled: boolean=false;
@Output() SingleProduct: EventEmitter<Products> =new EventEmitter;
  constructor(private sevice : CartService) { 
    this.ProductItem = new Products();

  }
  addToCart(ProductItem : Products)
  {
    this.SingleProduct.emit(ProductItem);
this.DisableButton();
  }
  private DisableButton(){
    let ProductFound=this.sevice.GetCartItems().Products.find(p=>p.id===this.ProductItem.id);
    if(ProductFound !== undefined)
    {
      this.disabled=true;
    }
  }
  ngOnInit(): void {
    this.DisableButton();
  }
  UpdateCartProducts( Product : Products){
    this.sevice.UpdateCartProducts(Product);

 }
}
