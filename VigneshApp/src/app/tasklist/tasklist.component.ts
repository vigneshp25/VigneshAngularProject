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
  toDoList = [{task: "Task 7", status: "ToDo"}, {task: "Task 8", status: "ToDo"}, {task: "Task 9", status: "ToDo"}];
  inProgressList = [{task: "Task 4", status: "InProgress"}, {task: "Task 5", status: "InProgress"}, {task: "Task 6", status: "InProgress"}];
  completedList = [{task: "Task 1", status: "Completed"}, {task: "Task 2", status: "Completed"}, {task: "Task 3", status: "Completed"}];
  statusTOShow = "ToDo";
  constructor(){
    this.taskListSearchText = "";
  }
  addToToDOList(){
    if(this.taskListSearchText.length > 0){
      this.toDoList.push({task: this.taskListSearchText, status: "ToDo"});
      this.taskListSearchText = "";
      console.log(this.toDoList);
    }
  }
}
