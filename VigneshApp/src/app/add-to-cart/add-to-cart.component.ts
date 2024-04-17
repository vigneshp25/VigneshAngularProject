import { Component } from '@angular/core';
import { CartCountComponent } from '../cart-count/cart-count.component';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [CartCountComponent],
  templateUrl: './add-to-cart.component.html',
  styleUrl: './add-to-cart.component.scss'
})
export class AddToCartComponent {

}
