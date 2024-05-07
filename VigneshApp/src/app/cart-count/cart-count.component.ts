import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-cart-count",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./cart-count.component.html",
    styleUrls: ["./cart-count.component.scss"]
})
export class CartCountComponent {
    cartCount: number = 0;
    addCartCount() {
        this.cartCount++;
    }
    removeCartCount() {
        this.cartCount--;
    }
}