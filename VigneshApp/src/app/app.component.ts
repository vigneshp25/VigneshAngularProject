import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddToCartComponent } from "./add-to-cart/add-to-cart.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, AddToCartComponent]
})
export class AppComponent {
  title = 'VigneshApp';
}
