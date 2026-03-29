import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInt } from './task.model.js';



@Component({
  selector: 'app-task',
  standalone:true,
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required:true}) task!:TaskInt
  @Output() complete = new EventEmitter<string>()

  onCompleteTask(){
    this.complete.emit(this.task.id)
  }
}
