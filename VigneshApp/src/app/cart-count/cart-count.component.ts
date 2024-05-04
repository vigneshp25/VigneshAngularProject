import { Component } from "@angular/core";
import { ButtoncompComponent } from "../buttoncomp/buttoncomp.component";

@Component({
    selector: "app-cart-count",
    standalone: true,
    imports: [ButtoncompComponent],
    templateUrl: "./cart-count.component.html",
    styleUrls: ["./cart-count.component.scss"]
})
export class CartCountComponent{
    cartCount: number = 0;
    addition: string = "+";
    subtraction: string = "-";
    isAddAllowed: boolean = false;
    isSubAllowed: boolean = false;
    addCartCount(){
        if(this.cartCount < 5){
            this.cartCount++;
            this.isSubAllowed = false;
        } else{
            this.isAddAllowed = true;
        }
    }
    removeCartCount(){
        if(this.cartCount == 0){
            this.isSubAllowed = true;
        }else{
            this.cartCount--;
            this.isAddAllowed = false;
        }
    }
}