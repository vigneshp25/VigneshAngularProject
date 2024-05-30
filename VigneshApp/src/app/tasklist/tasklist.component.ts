import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent {
  taskListSearchText : string;
  toDolist: Array<string> = ['task1', 'task2', 'task3'];
  constructor(){
    this.taskListSearchText = "";
  }
  addToToDOList(){
    if(this.taskListSearchText.length > 0){
      this.toDolist.push(this.taskListSearchText);
      this.taskListSearchText = "";
    }
  }
}
