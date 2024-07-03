import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss'
})
export class CardDetailsComponent {
  userName: string = '';
  cardNumber: number = 0;
  amount: number = 0;
  constructor(){
    
  }
}
