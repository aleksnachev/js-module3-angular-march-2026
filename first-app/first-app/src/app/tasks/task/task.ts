import { Component, inject, Input } from '@angular/core';
import { TaskInt } from './task.model.js';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service.js';



@Component({
  selector: 'app-task',
  standalone:true,
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required:true}) task!:TaskInt
  private tasksService = inject(TasksService)

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id)
  }
}
