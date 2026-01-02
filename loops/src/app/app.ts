import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  model = new ToDoModel();
  todos: string[] = ['Example 1', 'Example 2', 'Example 3'];
  todosWithTwoValues: [taskName: string, isCompleted: boolean][] = [
    ['Example 1', true],
    ['Example 2', false],
    ['Example 3', true],
  ];

  /**
   *
   */
  constructor() {
    //for da asenkron kodlama yapilabilir in de indexi yakaliyoruz
    for (let i = 0; i < this.todosWithTwoValues.length; i++) {
      console.log(this.todosWithTwoValues[i][0]);
    }
    for (const todo of this.todosWithTwoValues) {
      console.log(todo[0]);
    }
  
    for (const index in this.todosWithTwoValues) {
      console.log(index, this.todosWithTwoValues[index][0]);
    }
   
    this.todosWithTwoValues.forEach((todo) => {
      console.log(todo[0]);
    });
  }
}

export class ToDoModel {
  taskName: string = '';
  isCompleted: boolean = false;
}
