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
    addCartCount(){
        this.cartCount++;
    }
    removeCartCount(){
        this.cartCount--;
    }
}