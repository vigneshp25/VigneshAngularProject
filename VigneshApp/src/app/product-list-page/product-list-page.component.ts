import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.scss'
})
export class ProductListPageComponent {
  productName: string;
  productList: Array<string>;

  constructor() {
    this.productName = "";
    this.productList = ["Dell","Lenovo","Sony"];
  }
  addProduct(){
    if(this.productName.length > 0){
      this.productList.push(this.productName);
      this.productName="";
    }
  }
}
