import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [ NgClass,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tsudemy-firstproject');
  helloWorld: string  = "Hello World from ts";
  pClassName: string = "red";

  clickMe(){
    alert("Button Clicked");
    this.helloWorld = "Hello from Click Me Method";
  }
  changeHelloWorldVariable(event: any){
    this.helloWorld = event.target.value;
  }
}
