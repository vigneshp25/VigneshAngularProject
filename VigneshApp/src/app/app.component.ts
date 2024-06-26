import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddToCartComponent } from "./add-to-cart/add-to-cart.component";
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { CommonModule } from '@angular/common';
import { TasklistComponent } from './tasklist/tasklist.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, AddToCartComponent, ProductListPageComponent, CommonModule , TasklistComponent ]
})
export class AppComponent {
  title = 'VigneshApp';
}
