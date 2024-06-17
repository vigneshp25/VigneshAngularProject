import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustompipesPipe } from '../../pipes/custompipes.pipe';

@Component({
  selector: 'app-custom-pipe-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule, CustompipesPipe ],
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
