import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../../pipes/ordinalpipe.pipe';
import { TitleonlypipePipe } from '../../pipes/titleonlypipe.pipe';
import { ConjunctionwordspipePipe } from '../../pipes/conjunctionwordspipe.pipe';

@Component({
  selector: 'app-custom-pipe-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule, OrdinalPipe, TitleonlypipePipe, ConjunctionwordspipePipe ],
  templateUrl: './custom-pipe-tasks.component.html',
  styleUrl: './custom-pipe-tasks.component.scss'
})
export class CustomPipeTasksComponent {
  inputForCustomPipes: string ="";
  SelectionOfCustomPipes: string = "";
  showOneOfTheBelow: string = "";
  constructor(){
  }
}
