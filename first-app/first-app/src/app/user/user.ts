import { Component, EventEmitter, Input, Output} from '@angular/core';
import { UserInt } from './user.model.js';


@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone: true,
})
export class User {
  @Input({required:true}) user!: UserInt
  @Input({required:true}) selected!:boolean
  @Output() select = new EventEmitter()
  // avatar = input.required<string>()
  // name = input.required<string>()

  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // })

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
 