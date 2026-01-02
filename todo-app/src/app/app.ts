import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app');
  taskName: string = "";
  updatedTaskName: string = "";
  updatedIndex: number = -1;
  todos:string[] = [];
  isUpdateFromActive: boolean = false;

  saveTask() {
    this.todos.push(this.taskName);
    this.taskName = "";
  }
  deleteTask(index: number) {
    this.todos.splice(index, 1);
  }
  getTask(index: number) {
    this.updatedTaskName = this.todos[index];
    this.updatedIndex = index;
    this.isUpdateFromActive = true;
  }
  updateTask(index: number) {
    this.todos[index] = this.updatedTaskName;
    this.updatedIndex = -1;
    this.updatedTaskName = "";
    this.isUpdateFromActive = false;
  }
}
