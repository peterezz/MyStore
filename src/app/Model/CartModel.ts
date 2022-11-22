import { Products } from "./ProductsModel";
import { User } from "./UserModel";

export class Cart{
    user : User =new User();
    Products : Products[]=[];

    CalculateProductsTotalPrice() : number
    {
        let TotalPrice = 0;
        this.Products.forEach(element => {
            TotalPrice += element.price * element.Amount;
        });
        return TotalPrice;
    }

}