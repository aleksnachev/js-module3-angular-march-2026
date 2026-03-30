import { Component, Input } from '@angular/core';
import { Task } from './task/task.js';
import { NewTask } from './new-task/new-task.js';
import { NewTaskData } from './task/task.model.js';

import { TasksService } from './tasks.service.js';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required:true}) userId!:string
  @Input({required:true}) name!: string;
  isAddingTask = false
  
  constructor (private tasksService:TasksService) {

  }



  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }

  onStartAddTask(){
    this.isAddingTask = true
  }

  onCloseAddTask(){
    this.isAddingTask = false
  }
}
