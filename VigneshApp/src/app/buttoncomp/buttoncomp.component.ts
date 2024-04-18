import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttoncomp',
  standalone: true,
  imports: [],
  templateUrl: './buttoncomp.component.html',
  styleUrl: './buttoncomp.component.scss'
})
export class ButtoncompComponent {
  @Input() addition?: string;
  @Input() subtraction?: string;
}
